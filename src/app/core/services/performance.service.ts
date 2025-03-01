import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  private routePreloadMap: Map<string, string[]> = new Map([
    // Home page assets
    ['/home', [
      '/assets/logos/iskratel.webp',
      '/assets/logos/kontron.webp',
      '/assets/logos/gazprom.webp',
      '/assets/logos/hotel_park1.webp',
      '/assets/logos/rimac.svg',
      '/assets/logos/spar.webp',
      '/assets/logos/mm.svg',
      '/assets/logos/ugd.webp',
      '/assets/logos/elj.svg',
      '/assets/logos/makpetrol3.webp',
      '/assets/team.webp',
      '/assets/team-work.webp'
    ]],
    
    // About page assets
    ['/about', [
      '/assets/team.webp',
      '/assets/team-work.webp'
    ]],
    
    // Services page assets
    ['/services', [
      '/assets/images/customSoftware.webp',
      '/assets/images/contImprov.webp',
      '/assets/images/teamAugment.webp',
      '/assets/images/iot.webp',
      '/assets/images/custom-dev.webp'
    ]],
    
    // Our Work page assets
    ['/our-work', [
      '/assets/logos/iskratel.webp',
      '/assets/logos/kontron.webp',
      '/assets/logos/hotel_park1.webp',
      '/assets/logos/rimaTerm.webp',
      '/assets/logos/cityGym.webp',
      '/assets/logos/pianoSchool.webp', 
      '/assets/logos/ugd.webp',
      '/assets/logos/gichevTrejd.webp'
    ]],
    
    // Individual project pages - use existing files
    ['/our-work/iskratel', [
      '/assets/logos/iskratel.webp',
      '/assets/projects/iskratel/iskratel-team.webp'
    ]],
    
    ['/our-work/kontron', [
      '/assets/logos/kontron.webp',
      '/assets/projects/kontron/kontron-team.webp'
    ]],
    
    ['/our-work/hotel-park', [
      '/assets/logos/hotel_park1.webp',
      '/assets/projects/hotel-park/hero/image1.webp',
      '/assets/projects/hotel-park/hero/image2.webp',
      '/assets/projects/hotel-park/hero/image3.webp',
      '/assets/projects/hotel-park/hero/image4.webp',
      '/assets/projects/hotel-park/hero/image5.webp'
    ]],
    
    ['/our-work/piano-school', [
      '/assets/logos/mm.svg',
      '/assets/logos/pianoSchool.webp',
      '/assets/projects/piano-school/hero/hero1.webp',
      '/assets/projects/piano-school/hero/hero2.webp',
      '/assets/projects/piano-school/hero/hero3.webp',
      '/assets/projects/piano-school/hero/hero4.webp',
      '/assets/projects/piano-school/hero/hero5.webp'
    ]],
    
    ['/our-work/rima-term', [
      '/assets/logos/rimac.svg',
      '/assets/logos/rimaTerm.webp',
      '/assets/projects/rima-term/hero/rima-hero.webp'
    ]],
    
    ['/our-work/city-gym', [
      '/assets/logos/elj.svg',
      '/assets/logos/cityGym.webp',
      '/assets/projects/city-gym/hero/hero1.webp',
      '/assets/projects/city-gym/hero/hero2.webp',
      '/assets/projects/city-gym/hero/hero3.webp',
      '/assets/projects/city-gym/hero/hero4.webp',
      '/assets/projects/city-gym/hero/hero5.webp',
      '/assets/projects/city-gym/app/overview.webp'
    ]],
    
    // Contact page assets
    ['/contact-us', [
      '/assets/resolvr-logo.webp'
    ]],
    
    // Careers page assets
    ['/careers', [
      '/assets/resolvr-logo.webp',
      '/assets/team.webp'
    ]]
  ]);
  
  // Network connection state
  private slowConnection = false;
  private connectionType: string | null = null;
  private connectionSpeed: number | null = null;
  
  // Web Vitals metrics
  private webVitals: {[key: string]: number} = {
    lcp: 0, // Largest Contentful Paint
    fid: 0, // First Input Delay
    cls: 0, // Cumulative Layout Shift
    ttfb: 0 // Time to First Byte
  };

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.initRoutePreloading();
      this.detectNetworkCondition();
      this.monitorWebVitals();
    }
  }

  /**
   * Initialize route-based preloading
   */
  private initRoutePreloading(): void {
    // Listen for route changes to preload assets for next likely routes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.preloadAssetsForRoute(event.url);
    });
  }

  /**
   * Preload assets based on current route
   */
  private preloadAssetsForRoute(currentRoute: string): void {
    // Skip preloading on slow connections
    if (this.slowConnection) {
      // console.log('Skipping preload on slow connection');
      return;
    }
    
    // Find the closest matching route
    let routeToUse = currentRoute;
    if (!this.routePreloadMap.has(routeToUse)) {
      // Default to home if no match
      routeToUse = '/home';
    }

    const assetsToPreload = this.routePreloadMap.get(routeToUse) || [];
    
    for (const asset of assetsToPreload) {
      // Skip preloading on slow connections
      if (this.slowConnection) break;
      
      // Determine optimal image format
      this.getOptimizedAssetUrl(asset).then(optimizedAsset => {
        // Preload the asset
        this.preloadAsset(optimizedAsset);
      });
    }
  }
  
  /**
   * Detect network conditions to adapt loading strategy
   */
  private detectNetworkCondition(): void {
    // Skip in server-side rendering
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Try to use Network Information API first
    if ('connection' in navigator && (navigator as any).connection) {
      this.connectionType = (navigator as any).connection.effectiveType;
      // console.log(`Connection type detected: ${this.connectionType}`);
      
      // Mark as slow connection for 2G or slow-2G connections
      this.slowConnection = this.connectionType ? ['slow-2g', '2g'].includes(this.connectionType) : false;
      
      // Listen for changes to the connection
      (navigator as any).connection.addEventListener('change', () => {
        this.connectionType = (navigator as any).connection.effectiveType;
        this.slowConnection = this.connectionType ? ['slow-2g', '2g'].includes(this.connectionType) : false;
        // console.log(`Connection changed to: ${this.connectionType}`);
        this.adjustLoadingStrategies();
      });
    } else {
      // Fallback to measuring download speed
      if (this.isDevMode()) {
        // In development mode, skip the test to avoid console errors
        // console.log('Development mode detected, skipping connection speed test');
        this.slowConnection = false;
        this.connectionSpeed = 5000; // Assume 5 Mbps as default for development
        this.adjustLoadingStrategies();
      } else {
        // In production, attempt to measure connection speed
        this.measureConnectionSpeed();
      }
    }
  }
  
  /**
   * Measure connection speed as fallback
   */
  private measureConnectionSpeed(): void {
    try {
      // Add a cache buster to prevent caching
      const cacheBuster = '?t=' + new Date().getTime();
      // Use test-image.jpg from the performance folder we created earlier
      const downloadUrl = '/assets/images/performance/test-image.jpg' + cacheBuster;
      
      const imageSize = 5; // Size in KB - should match actual file size
      const download = new Image();
      let startTime: number;

      download.onload = () => {
        const endTime = (new Date()).getTime();
        const duration = (endTime - startTime) / 1000; // Convert to seconds
        
        // Calculate speed in Kbps
        const speed = ((imageSize * 8) / duration).toFixed(2);
        // console.log(`Connection Speed: ${speed} Kbps`);
        
        // Mark as slow connection if under 1 Mbps
        this.slowConnection = parseFloat(speed) < 1000;
        this.connectionSpeed = parseFloat(speed);
        
        // Log connection status
        // console.log(`Connection detected as: ${this.slowConnection ? 'slow' : 'fast'}`);
        
        // Adjust loading strategies based on connection speed
        this.adjustLoadingStrategies();
      };

      download.onerror = (e) => {
        console.warn('Could not test connection speed, assuming standard connection', e);
        // Assume not a slow connection to avoid overly conservative loading
        this.slowConnection = false;
        this.connectionSpeed = 5000; // Assume 5 Mbps as default
        this.adjustLoadingStrategies();
      };

      // Set start time and begin download
      startTime = (new Date()).getTime();
      download.src = downloadUrl;
    } catch (error) {
      console.error('Error measuring connection speed:', error);
      this.slowConnection = false;
      this.connectionSpeed = 5000; // Assume 5 Mbps as default
      this.adjustLoadingStrategies();
    }
  }
  
  /**
   * Monitor Web Vitals to detect performance issues
   */
  private monitorWebVitals(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    try {
      // First Input Delay (FID)
      this.monitorFID();
      
      // Largest Contentful Paint (LCP)
      this.monitorLCP();
      
      // Cumulative Layout Shift (CLS)
      this.monitorCLS();
      
      // First Contentful Paint (FCP)
      this.monitorFCP();
      
      // Time to Interactive (TTI) - can be approximated
      this.approximateTTI();
      
      // console.log('Web Vitals monitoring initialized');
    } catch (e) {
      console.warn('Failed to initialize Web Vitals monitoring', e);
    }
  }
  
  /**
   * Monitor First Input Delay (FID)
   */
  private monitorFID(): void {
    const fidEntries: PerformanceEventTiming[] = [];
    
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const fidEntry = entry as PerformanceEventTiming;
        fidEntries.push(fidEntry);
        
        const delay = fidEntry.processingStart! - fidEntry.startTime;
        // console.log(`FID: ${delay.toFixed(1)}ms`);
        
        // Report to analytics or monitoring service
        this.reportWebVital('FID', delay);
      }
    });
    
    observer.observe({ type: 'first-input', buffered: true });
  }
  
  /**
   * Monitor Largest Contentful Paint (LCP)
   */
  private monitorLCP(): void {
    let lcpEntry: PerformanceEntry | null = null;
    
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      lcpEntry = entries[entries.length - 1];
      
      // console.log(`LCP: ${lcpEntry.startTime.toFixed(1)}ms`);
      
      // Report to analytics or monitoring service
      this.reportWebVital('LCP', lcpEntry.startTime);
    });
    
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  }
  
  /**
   * Monitor Cumulative Layout Shift (CLS)
   */
  private monitorCLS(): void {
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];
    
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        // Only count layout shifts without recent user input
        if (!(entry as any).hadRecentInput) {
          const impact = (entry as any).value;
          clsValue += impact;
          clsEntries.push(entry);
          
          // console.log(`CLS update: ${clsValue.toFixed(3)}`);
          
          // Report to analytics or monitoring service
          this.reportWebVital('CLS', clsValue);
        }
      }
    });
    
    observer.observe({ type: 'layout-shift', buffered: true });
  }
  
  /**
   * Monitor First Contentful Paint (FCP)
   */
  private monitorFCP(): void {
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        // console.log(`FCP: ${entry.startTime.toFixed(1)}ms`);
        
        // Report to analytics or monitoring service
        this.reportWebVital('FCP', entry.startTime);
      }
    });
    
    observer.observe({ type: 'paint', buffered: true });
  }
  
  /**
   * Approximate Time to Interactive (TTI)
   * This is a simplified version as true TTI is complex to measure
   */
  private approximateTTI(): void {
    // Wait for load event
    window.addEventListener('load', () => {
      setTimeout(() => {
        // Get all timing metrics
        const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navTiming) {
          const loadTime = navTiming.loadEventEnd - navTiming.startTime;
          // console.log(`Approximate TTI: ${loadTime.toFixed(1)}ms`);
          
          // Report to analytics or monitoring service
          this.reportWebVital('TTI', loadTime);
        }
      }, 0);
    });
  }
  
  /**
   * Report a web vital to analytics or monitoring service
   */
  private reportWebVital(name: string, value: number): void {
    // Check if the value is good based on industry standards
    let status = this.getWebVitalStatus(name, value);
    
    // Store in localStorage for debugging
    this.storeWebVital(name, value, status);
    
    // Report to analytics
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: name,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        non_interaction: true,
      });
    }
  }
  
  /**
   * Get the status of a web vital based on industry standards
   */
  private getWebVitalStatus(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    switch (name) {
      case 'LCP':
        return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
      case 'FID':
        return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
      case 'CLS':
        return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
      case 'FCP':
        return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
      case 'TTI':
        return value <= 3800 ? 'good' : value <= 7300 ? 'needs-improvement' : 'poor';
      default:
        return 'needs-improvement';
    }
  }
  
  /**
   * Store web vital in localStorage for debugging
   */
  private storeWebVital(name: string, value: number, status: string): void {
    try {
      const vitals = JSON.parse(localStorage.getItem('web_vitals') || '{}');
      vitals[name] = { value, status, timestamp: new Date().toISOString() };
      localStorage.setItem('web_vitals', JSON.stringify(vitals));
    } catch (e) {
      console.warn('Failed to store web vital', e);
    }
  }
  
  /**
   * Check if browser supports WebP format
   */
  private checkWebPSupport(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      if (!isPlatformBrowser(this.platformId)) {
        resolve(false);
        return;
      }
      
      const webPSupportKey = 'webp-support';
      
      // Check localStorage first to avoid unnecessary checks on repeat visits
      const cachedSupport = localStorage.getItem(webPSupportKey);
      if (cachedSupport !== null) {
        resolve(cachedSupport === 'true');
        return;
      }
      
      const webP = new Image();
      
      webP.onload = function() {
        // WebP is supported if the image's width is 1 pixel
        const result = (webP.width > 0) && (webP.height > 0);
        localStorage.setItem(webPSupportKey, result ? 'true' : 'false');
        resolve(result);
      };
      
      webP.onerror = function() {
        localStorage.setItem(webPSupportKey, 'false');
        resolve(false);
      };
      
      // Base64 representation of a white 1x1 WebP image
      webP.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
    });
  }
  
  /**
   * Check if the browser supports AVIF format
   */
  private checkAVIFSupport(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      if (!isPlatformBrowser(this.platformId)) {
        resolve(false);
        return;
      }
      
      const avifSupportKey = 'avif-support';
      
      // Check localStorage first to avoid unnecessary checks on repeat visits
      const cachedSupport = localStorage.getItem(avifSupportKey);
      if (cachedSupport !== null) {
        resolve(cachedSupport === 'true');
        return;
      }
      
      const avif = new Image();
      
      avif.onload = function() {
        const result = (avif.width > 0) && (avif.height > 0);
        localStorage.setItem(avifSupportKey, result ? 'true' : 'false');
        resolve(result);
      };
      
      avif.onerror = function() {
        localStorage.setItem(avifSupportKey, 'false');
        resolve(false);
      };
      
      // Base64 representation of a white 1x1 AVIF image
      avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    });
  }
  
  /**
   * Get optimized asset URL based on browser capabilities
   */
  public getOptimizedAssetUrl(assetUrl: string): Promise<string> {
    return new Promise<string>(async (resolve) => {
      if (!isPlatformBrowser(this.platformId)) {
        resolve(assetUrl);
        return;
      }
      
      // Check if it's an image that could potentially have WebP or AVIF versions
      if (!assetUrl.match(/\.(png|jpg|jpeg)$/i)) {
        resolve(assetUrl);
        return;
      }
      
      // If on slow connection, use original (possibly smaller) image
      if (this.slowConnection) {
        resolve(assetUrl);
        return;
      }
      
      try {
        // Check for WebP support only - removing AVIF since files don't exist
        const webPSupport = await this.checkWebPSupport();
        
        // Skip AVIF checks since we don't have AVIF files
        
        // Try WebP
        if (webPSupport) {
          const webpUrl = assetUrl.replace(/\.(png|jpg|jpeg)$/i, '.webp');
          
          // Check if webp version exists
          try {
            if (await this.checkFileExists(webpUrl)) {
              resolve(webpUrl);
              return;
            }
          } catch (error) {
            console.warn('Error checking WebP file existence:', error);
          }
        }
        
        // Fallback to original asset
        resolve(assetUrl);
      } catch (error) {
        console.warn('Error in getOptimizedAssetUrl:', error);
        resolve(assetUrl);
      }
    });
  }
  
  /**
   * Preload a single asset
   */
  private preloadAsset(assetUrl: string): void {
    try {
      // Skip if already preloaded or if we're on a slow connection
      if (this.slowConnection) {
        return;
      }
      
      // Check if already preloaded
      const exists = document.querySelector(`link[rel="preload"][href="${assetUrl}"]`);
      if (exists) {
        return;
      }
      
      const fileExtension = assetUrl.split('.').pop()?.toLowerCase();
      
      if (!fileExtension) {
        console.warn(`Could not determine file extension for: ${assetUrl}`);
        return;
      }
      
      // Check if the file exists before preloading
      this.checkFileExists(assetUrl).then(exists => {
        if (!exists) {
          console.warn(`File does not exist: ${assetUrl}`);
          return;
        }
        
        let linkElement = document.createElement('link');
        linkElement.rel = 'preload';
        linkElement.href = assetUrl;
        
        // Handle specific file types
        if (['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif'].includes(fileExtension)) {
          linkElement.as = 'image';
        } else if (fileExtension === 'svg') {
          linkElement.as = 'image';
        } else if (['css'].includes(fileExtension)) {
          linkElement.as = 'style';
        } else if (['js'].includes(fileExtension)) {
          linkElement.as = 'script';
        } else if (['woff', 'woff2', 'ttf', 'otf'].includes(fileExtension)) {
          linkElement.as = 'font';
          linkElement.setAttribute('crossorigin', 'anonymous');
        } else {
          // Default for other file types
          linkElement.as = 'fetch';
        }
        
        document.head.appendChild(linkElement);
        // console.log(`Preloaded: ${assetUrl}`);
      });
    } catch (error) {
      console.warn(`Failed to preload asset: ${assetUrl}`, error);
    }
  }
  
  /**
   * Check if a file exists using a HEAD request
   */
  private checkFileExists(url: string): Promise<boolean> {
    return new Promise(resolve => {
      if (!isPlatformBrowser(this.platformId)) {
        resolve(false);
        return;
      }
      
      if (url.startsWith('http')) {
        // For external URLs, assume they exist
        resolve(true);
        return;
      }
      
      // For image files, we can check using Image object
      if (url.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i)) {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
        return;
      }
      
      // For other files, use fetch with HEAD method
      fetch(url, { method: 'HEAD' })
        .then(response => {
          resolve(response.ok);
        })
        .catch(() => {
          resolve(false);
        });
    });
  }

  /**
   * Apply global performance optimizations used across the application
   */
  public applyGlobalPerformanceOptimizations(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Detect network conditions
      this.detectNetworkCondition();
      
      // Monitor web vitals metrics
      this.monitorWebVitals();
      
      // Set up route-based preloading
      this.setupRoutePreloading();
      
      // Optimize font rendering
      this.optimizeFontRendering();
      
      // Inline critical CSS for faster rendering
      this.inlineCriticalCSS();
      
      // Preload assets for current route
      const currentRoute = this.router.url || '/home';
      this.preloadAssetsForRoute(currentRoute);
    }
  }

  /**
   * Set up route-based preloading
   */
  private setupRoutePreloading(): void {
    // Listen for navigation events
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Get the current route
      const currentRoute = event.url;
      
      // Preload assets for this route
      this.preloadAssetsForRoute(currentRoute);
      
      // console.log(`Preloaded assets for route: ${currentRoute}`);
    });
  }

  /**
   * Optimize font rendering
   */
  private optimizeFontRendering(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    try {
      // Preload critical fonts - only preload WOFF2 fonts for better performance
      // OTF fonts should be converted to WOFF2 for optimal loading
      const fontFiles: string[] = [
        // '/assets/fonts/font1.otf' // Disabled as OTF is not optimal
      ];
      
      fontFiles.forEach(fontUrl => {
        this.preloadFont(fontUrl);
      });
      
      // Add font-display: swap to all font-face rules
      const styleSheets = Array.from(document.styleSheets);
      
      styleSheets.forEach(sheet => {
        try {
          // Skip external stylesheets due to CORS
          if (!sheet.href || !sheet.href.startsWith(window.location.origin)) return;
          
          const rules = Array.from(sheet.cssRules || []);
          rules.forEach(rule => {
            if (rule instanceof CSSFontFaceRule) {
              const style = (rule as any).style;
              if (style && !style.fontDisplay) {
                style.fontDisplay = 'swap';
              }
            }
          });
        } catch (e) {
          // Safely ignore any errors while accessing CSS rules (may be CORS protected)
        }
      });
    } catch (e) {
      console.warn('Font optimization failed', e);
    }
  }
  
  /**
   * Preload a font with proper settings
   */
  private preloadFont(fontUrl: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    try {
      this.checkFileExists(fontUrl).then(fileExists => {
        if (!fileExists) {
          console.warn(`Font file does not exist: ${fontUrl}`);
          return;
        }
        
        // Check if already preloaded
        const alreadyPreloaded = document.querySelector(`link[rel="preload"][href="${fontUrl}"]`);
        if (alreadyPreloaded) {
          return;
        }
        
        // Don't preload OTF fonts as they're not optimal for web
        if (fontUrl.endsWith('.otf')) {
          console.warn(`Skipping preload for OTF font: ${fontUrl} - convert to WOFF2 for better performance`);
          return;
        }
        
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = fontUrl;
        link.as = 'font';
        link.setAttribute('type', fontUrl.endsWith('.woff2') ? 'font/woff2' : 
                                fontUrl.endsWith('.woff') ? 'font/woff' : 
                                fontUrl.endsWith('.ttf') ? 'font/ttf' : 
                                'font/woff2'); // Default to woff2 type
        link.setAttribute('crossorigin', 'anonymous');
        
        // Ensure the font is actually used in the document
        // link.onload = () => console.log(`Successfully preloaded font: ${fontUrl}`);
        link.onerror = () => console.warn(`Failed to preload font: ${fontUrl}`);
        
        document.head.appendChild(link);
      });
    } catch (e) {
      console.warn(`Failed to preload font: ${fontUrl}`, e);
    }
  }
  
  /**
   * Inline critical CSS
   */
  public inlineCriticalCSS(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    try {
      // Check for above-the-fold elements
      const criticalElements = document.querySelectorAll('.hero, header, nav, .banner, .intro, h1, h2');
      
      if (criticalElements.length === 0) return;
      
      // Extract and inline critical styles
      const styleSheets = Array.from(document.styleSheets);
      let criticalCSS = '';
      
      // Critical selectors - common ones that should be loaded immediately
      const criticalSelectors = [
        'body', 'html', '.container', '.row', '.col', 'header', 'nav', '.hero', 
        'h1', 'h2', 'h3', '.banner', '.intro', '.btn', '.navbar', '.masthead',
        '.title', '.subtitle', '.card', '.logo', '.brand', '.header', '.footer'
      ];
      
      styleSheets.forEach(sheet => {
        try {
          // Skip external stylesheets due to CORS
          if (!sheet.href || !sheet.href.startsWith(window.location.origin)) return;
          
          const rules = Array.from(sheet.cssRules || []);
          rules.forEach(rule => {
            if (rule instanceof CSSStyleRule) {
              const selector = rule.selectorText;
              
              // Check if this selector is critical
              if (criticalSelectors.some(criticalSelector => 
                  selector.includes(criticalSelector))) {
                criticalCSS += rule.cssText + '\n';
              } else {
                // Check if this selector matches any of our critical elements
                criticalElements.forEach(element => {
                  try {
                    if (element.matches(selector)) {
                      criticalCSS += rule.cssText + '\n';
                    }
                  } catch (e) {
                    // Invalid selector, skip
                  }
                });
              }
            } else if (rule instanceof CSSMediaRule) {
              // Include important media queries (like those for responsive layout)
              if (rule.conditionText.includes('max-width') || 
                  rule.conditionText.includes('min-width')) {
                criticalCSS += `@media ${rule.conditionText} {\n`;
                
                Array.from(rule.cssRules).forEach(mediaRule => {
                  if (mediaRule instanceof CSSStyleRule) {
                    const selector = mediaRule.selectorText;
                    
                    if (criticalSelectors.some(criticalSelector => 
                        selector.includes(criticalSelector))) {
                      criticalCSS += '  ' + mediaRule.cssText + '\n';
                    }
                  }
                });
                
                criticalCSS += '}\n';
              }
            }
          });
        } catch (e) {
          // Safely ignore any errors while accessing CSS rules (may be CORS protected)
        }
      });
      
      // Inject critical CSS
      if (criticalCSS) {
        const style = document.createElement('style');
        style.textContent = criticalCSS;
        style.setAttribute('data-critical', 'true');
        
        // Insert at the top of the head for highest priority
        if (document.head.firstChild) {
          document.head.insertBefore(style, document.head.firstChild);
        } else {
          document.head.appendChild(style);
        }
        
        // console.log('Critical CSS inlined');
      }
    } catch (e) {
      console.warn('Failed to inline critical CSS', e);
    }
  }

  /**
   * Get current web vitals metrics
   */
  public getWebVitals(): {[key: string]: number} {
    return { ...this.webVitals };
  }

  private adjustLoadingStrategies(): void {
    // Implement logic to adjust loading strategies based on connection speed
  }

  private isDevMode(): boolean {
    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  }
}
