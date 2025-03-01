import { Directive, ElementRef, Input, OnInit, Renderer2, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Directive for lazy loading images using Intersection Observer
 * This improves performance by only loading images when they are about to enter the viewport
 */
@Directive({
  selector: '[appLazyImage]',
  standalone: true
})
export class LazyImageDirective implements OnInit, OnDestroy {
  @Input() appLazyImage: string = '';
  @Input() placeholderSrc: string = 'assets/images/performance/placeholder.webp';
  @Input() srcset: string = ''; // Support for responsive images
  @Input() sizes: string = ''; // Support for responsive images
  @Input() priority: boolean = false; // Add priority flag for LCP images
  
  private observer: IntersectionObserver | null = null;
  private isLoaded = false;
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  
  ngOnInit(): void {
    // Skip lazy loading setup on server-side rendering
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    // Remove any explicit width/height attributes if present to maintain aspect ratio
    if (this.el.nativeElement.hasAttribute('width')) {
      this.renderer.removeAttribute(this.el.nativeElement, 'width');
    }
    if (this.el.nativeElement.hasAttribute('height')) {
      this.renderer.removeAttribute(this.el.nativeElement, 'height');
    }
    
    // Ensure the image preserves its aspect ratio 
    this.renderer.setStyle(this.el.nativeElement, 'height', 'auto');
    
    // Set placeholder image
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.placeholderSrc);
    
    // Add data attributes for the actual image source
    this.renderer.setAttribute(this.el.nativeElement, 'data-src', this.appLazyImage);
    
    // Add srcset and sizes if provided
    if (this.srcset) {
      this.renderer.setAttribute(this.el.nativeElement, 'data-srcset', this.srcset);
    }
    
    if (this.sizes) {
      this.renderer.setAttribute(this.el.nativeElement, 'data-sizes', this.sizes);
      this.renderer.setAttribute(this.el.nativeElement, 'sizes', this.sizes);
    }
    
    // Add CSS class for styling during loading
    this.renderer.addClass(this.el.nativeElement, 'loading');
    
    // Handle priority images (like LCP elements) immediately
    if (this.priority) {
      this.renderer.setAttribute(this.el.nativeElement, 'loading', 'eager');
      this.loadImage();
      return;
    }
    
    // Initialize Intersection Observer if supported
    if ('IntersectionObserver' in window) {
      this.setupIntersectionObserver();
    } else {
      // Fallback for browsers that don't support Intersection Observer
      this.loadImage();
    }
  }
  
  private setupIntersectionObserver(): void {
    const options = {
      rootMargin: '200px 0px', // Start loading when image is 200px from viewport (increased for better performance)
      threshold: 0.01 // Trigger when just 1% of the element is visible (reduced for faster loading)
    };
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isLoaded) {
          this.loadImage();
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, options);
    
    this.observer.observe(this.el.nativeElement);
  }
  
  private loadImage(): void {
    // Get the image URL from data-src
    const imageSrc = this.el.nativeElement.getAttribute('data-src');
    if (!imageSrc) return;
    
    // Create a new image to preload
    const img = new Image();
    
    // When the image is loaded, update the src attribute
    img.onload = () => {
      this.renderer.setAttribute(this.el.nativeElement, 'src', imageSrc);
      this.renderer.removeClass(this.el.nativeElement, 'loading');
      this.renderer.addClass(this.el.nativeElement, 'loaded');
      this.isLoaded = true;
      
      // Ensure proper aspect ratio by setting height to auto
      this.renderer.setStyle(this.el.nativeElement, 'height', 'auto');
      
      // Handle srcset if available
      const dataSrcset = this.el.nativeElement.getAttribute('data-srcset');
      if (dataSrcset) {
        try {
          this.renderer.setAttribute(this.el.nativeElement, 'srcset', dataSrcset);
        } catch (error) {
          console.warn('Failed to set srcset, falling back to src only', error);
          // If srcset fails (e.g., missing responsive variants), we already have the main image loaded
          this.renderer.addClass(this.el.nativeElement, 'missing-variant');
        }
      }
    };
    
    // If there's an error loading the image, keep the placeholder
    img.onerror = () => {
      console.warn(`Failed to load image: ${imageSrc}`);
    };
    
    // Start loading the image
    img.src = imageSrc;
    
    // Handle srcset for preloading if provided
    const dataSrcset = this.el.nativeElement.getAttribute('data-srcset');
    if (dataSrcset) {
      try {
        img.srcset = dataSrcset;
      } catch (error) {
        console.warn('Failed to preload srcset, will try with src only', error);
        // Continue with the main image loading
      }
    }
  }
  
  ngOnDestroy(): void {
    // Cleanup observer when directive is destroyed
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
