import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  // Simplified route preload map with only verified existing assets
  private routePreloadMap: Map<string, string[]> = new Map([
    // Home page assets - only critical assets
    ['/home', [
      '/assets/resolvr-logo.webp'
    ]],
    
    // About page assets - only critical assets
    ['/about', [
      '/assets/team.webp'
    ]],
    
    // Services page assets - only critical assets
    ['/services', [
      '/assets/resolvr-logo.webp'
    ]]
  ]);
  
  // Network connection state
  private slowConnection = false;
  private connectionType: string | null = null;
  private connectionSpeed: number | null = null;
  
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      // Only initialize essential performance optimizations
      this.detectNetworkCondition();
    }
  }

  /**
   * Initialize route-based preloading - simplified
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
   * Preload assets based on current route - simplified
   */
  private preloadAssetsForRoute(currentRoute: string): void {
    // Skip preloading on slow connections
    if (this.slowConnection) {
      return;
    }
    
    // Find the closest matching route
    let routeToUse = currentRoute;
    if (!this.routePreloadMap.has(routeToUse)) {
      // Default to home if no match
      routeToUse = '/home';
    }

    const assetsToPreload = this.routePreloadMap.get(routeToUse) || [];
    
    // Only preload the first 2 assets to reduce overhead
    const limitedAssets = assetsToPreload.slice(0, 2);
    
    for (const asset of limitedAssets) {
      // Skip preloading on slow connections or non-existent files
      if (this.slowConnection) break;
      
      // Skip invalid assets
      if (!asset || asset.length < 5) continue;
      
      // Preload the asset directly without additional processing
      this.preloadAsset(asset);
    }
  }
  
  /**
   * Detect network conditions to adapt loading strategy - simplified
   */
  private detectNetworkCondition(): void {
    // Skip in server-side rendering
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Try to use Network Information API first
    if ('connection' in navigator && (navigator as any).connection) {
      this.connectionType = (navigator as any).connection.effectiveType;
      
      // Mark as slow connection for 2G or slow-2G connections
      this.slowConnection = this.connectionType ? ['slow-2g', '2g'].includes(this.connectionType) : false;
    } else {
      // Assume standard connection without testing
      this.slowConnection = false;
      this.connectionSpeed = 5000; // Assume 5 Mbps as default
    }
  }
  
  /**
   * Measure connection speed as fallback - simplified to avoid errors
   */
  private measureConnectionSpeed(): void {
    // Skip connection speed test and assume standard connection
    // This avoids the "Could not test connection speed" errors
    this.slowConnection = false;
    this.connectionSpeed = 5000; // Assume 5 Mbps as default
  }
  
  /**
   * Preload a single asset - simplified and with error handling
   */
  private preloadAsset(assetUrl: string): void {
    try {
      if (!isPlatformBrowser(this.platformId) || this.slowConnection) {
        return;
      }
      
      // Skip invalid URLs
      if (!assetUrl || !assetUrl.startsWith('/assets/')) {
        return;
      }
      
      // Check if already preloaded
      const exists = document.querySelector(`link[rel="preload"][href="${assetUrl}"]`);
      if (exists) {
        return;
      }
      
      const fileExtension = assetUrl.split('.').pop()?.toLowerCase();
      
      if (!fileExtension) {
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
    } catch (error) {
      // Silently handle errors
    }
  }

  /**
   * Apply global performance optimizations used across the application - simplified
   */
  public applyGlobalPerformanceOptimizations(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Detect network conditions
      this.detectNetworkCondition();
      
      // Set up route-based preloading
      this.initRoutePreloading();
      
      // Preload assets for current route
      const currentRoute = this.router.url || '/home';
      this.preloadAssetsForRoute(currentRoute);
    }
  }

  /**
   * Check if in development mode
   */
  private isDevMode(): boolean {
    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  }
}
