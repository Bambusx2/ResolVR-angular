import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-development',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-development.component.html',
  styleUrls: ['./product-development.component.css']
})
export class ProductDevelopmentComponent implements OnInit, AfterViewInit {
  @ViewChildren('step') steps!: QueryList<ElementRef>;
  loading = true;

  constructor(
    private el: ElementRef,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.initSEO();
    this.initFAQs();
    // Simulate loading state
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  ngAfterViewInit() {
    this.observeSteps();
  }

  private observeSteps() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    this.steps.forEach(step => observer.observe(step.nativeElement));
  }

  private initFAQs() {
    // Your existing FAQ logic
  }

  private initSEO() {
    // Set page title
    this.title.setTitle('Enterprise Software Development & Cloud Solutions | ResolVR');

    // Set meta tags
    this.meta.addTags([
      { name: 'description', content: 'Transform your business with enterprise-grade software development. Cloud-native solutions, AI integration, and scalable architecture by ResolVR.' },
      { name: 'keywords', content: 'software development, enterprise solutions, cloud-native, AI integration, MVP development, digital transformation' },
      { property: 'og:title', content: 'Enterprise Software Development & Cloud Solutions | ResolVR' },
      { property: 'og:description', content: 'Transform your business with enterprise-grade software development. Cloud-native solutions, AI integration, and scalable architecture by ResolVR.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://resolvr.dev/services/product-development' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'ResolVR' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://resolvr.dev/services/product-development' }
    ]);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Add keyboard navigation
  @HostListener('keydown', ['$event'])
  handleKeyboardNav(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      const focusableElements = this.el.nativeElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
    }
  }

  // Add error handling
  handleError(error: any) {
    console.error('An error occurred:', error);
    // Implement error UI feedback
  }
}
