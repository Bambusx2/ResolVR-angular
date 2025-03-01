import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://resolvr.dev';

  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router
  ) {}

  /**
   * Updates all SEO-related meta tags for a specific page
   */
  updateMetaTags(config: SeoConfig): void {
    // Basic SEO tags
    this.titleService.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph (Facebook) tags
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: this.getFullUrl() });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }

    // Twitter Card tags
    this.meta.updateTag({ property: 'twitter:title', content: config.title });
    this.meta.updateTag({ property: 'twitter:description', content: config.description });
    
    if (config.image) {
      this.meta.updateTag({ property: 'twitter:image', content: config.image });
    }

    // Canonical URL
    this.updateCanonicalUrl();
  }

  /**
   * Updates the canonical URL meta tag
   */
  private updateCanonicalUrl(): void {
    const fullUrl = this.getFullUrl();
    
    // Find existing canonical tag
    const canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (canonicalElement) {
      // Update existing canonical tag
      canonicalElement.href = fullUrl;
    } else {
      // Create new canonical tag if it doesn't exist
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', fullUrl);
      document.head.appendChild(link);
    }
  }

  /**
   * Gets the full URL of the current page
   */
  private getFullUrl(): string {
    return `${this.baseUrl}${this.router.url}`;
  }
}
