import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";
import { ParticlesComponent } from './shared/particles/particles/particles.component';
import { PerformanceService } from './core/services/performance.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, ParticlesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'resolvr';
  isScrolled = false;

  constructor(
    private router: Router, 
    private performanceService: PerformanceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  ngOnInit(): void {
    // Apply performance optimizations
    if (isPlatformBrowser(this.platformId)) {
      this.performanceService.applyGlobalPerformanceOptimizations();
      
      // Add intersection observer for lazy loading elements
      this.setupIntersectionObserver();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 300;
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  /**
   * Set up Intersection Observer to lazy load components as they become visible
   */
  private setupIntersectionObserver(): void {
    const options = {
      root: null, // use viewport
      rootMargin: '200px', // trigger 200px before element enters viewport
      threshold: 0.01 // trigger when 1% of the element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyElement = entry.target as HTMLElement;
          
          // Load any lazy-loaded images
          if (lazyElement.dataset['lazySrc']) {
            const img = lazyElement as HTMLImageElement;
            
            // Set loading status for screen readers
            if (!img.hasAttribute('aria-busy')) {
              img.setAttribute('aria-busy', 'true');
            }
            
            // Create a temporary image to preload
            const tempImage = new Image();
            tempImage.onload = () => {
              // Only update the src once the image is loaded
              img.src = tempImage.src;
              
              // Update accessibility attributes
              img.setAttribute('aria-busy', 'false');
              
              // If the image doesn't have an alt attribute, use the filename as fallback
              if (!img.alt) {
                const filename = img.src.split('/').pop()?.split('.')[0] || '';
                img.alt = filename.replace(/-/g, ' ');
              }
              
              // Remove the background color once loaded
              img.style.backgroundColor = '';
              
              // Ensure proper aspect ratio
              img.style.height = 'auto';
              
              // Add fade in effect with a slight delay to ensure smooth transition
              img.style.opacity = '0';
              setTimeout(() => {
                img.style.transition = 'opacity 0.3s ease-in';
                img.style.opacity = '1';
              }, 30);
              
              // Handle any dataset attributes needed for accessibility
              if (img.dataset['lazyAlt']) {
                img.alt = img.dataset['lazyAlt'];
                delete img.dataset['lazyAlt'];
              }
              
              // Clean up dataset
              delete img.dataset['lazySrc'];
            };
            
            // Handle errors
            tempImage.onerror = () => {
              img.setAttribute('aria-busy', 'false');
              
              // Provide a fallback or error state
              if (img.dataset['lazyFallback']) {
                img.src = img.dataset['lazyFallback'];
              }
              
              // Add error class for styling
              img.classList.add('lazy-load-error');
              
              // Clean up dataset
              delete img.dataset['lazySrc'];
            };
            
            // Start loading the image
            tempImage.src = img.dataset['lazySrc'] || '';
          }
          
          // Remove from observation once loading is triggered
          observer.unobserve(lazyElement);
        }
      });
    }, options);
    
    // Observe all elements with data-lazy-src attribute
    document.querySelectorAll('[data-lazy-src]').forEach(el => {
      // Don't force dimensions - let images maintain their natural aspect ratio
      if (el instanceof HTMLImageElement) {
        // Only add a subtle loading indicator
        el.style.backgroundColor = '#f0f0f0';
        
        // Set width and height styles explicitly to auto to preserve aspect ratio
        el.style.width = '100%';
        el.style.height = 'auto';
      }
      
      observer.observe(el);
    });
  }
}
