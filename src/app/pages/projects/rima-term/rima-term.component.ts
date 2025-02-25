import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { ProjectCardsComponent } from '../../../shared/project-cards/project-cards.component';

declare const gtag: Function;

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

@Component({
  selector: 'app-rima-term',
  templateUrl: './rima-term.component.html',
  styleUrls: ['./rima-term.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    NgOptimizedImage,
    ProjectCardsComponent
  ],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'translateY(20px)' 
        }),
        animate('0.5s cubic-bezier(0.23, 1, 0.32, 1)', 
          style({ 
            opacity: 1, 
            transform: 'translateY(0)' 
          })
        )
      ])
    ]),
    trigger('staggerFade', [
      transition(':enter', [
        query('.metric', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ])
      ])
    ])
  ]
})
export class RimaTermComponent implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);
  private viewportScroller = inject(ViewportScroller);

  features = [
    {
      icon: 'fas fa-shopping-cart',
      title: 'Purchase Management',
      description: 'Advanced system for managing raw material purchases including sunflower seeds, rice, and agricultural products',
      ariaLabel: 'Purchase Management Feature'
    },
    {
      icon: 'fas fa-users',
      title: 'Partner Portal',
      description: 'Centralized platform for supplier and distributor management with real-time order tracking'
    },
    {
      icon: 'fas fa-boxes',
      title: 'Inventory Control',
      description: 'Smart inventory tracking for finished products with automated stock level alerts'
    },
    {
      icon: 'fas fa-warehouse',
      title: 'Warehouse Management',
      description: 'Multi-warehouse system with location tracking and batch management capabilities'
    },
    {
      icon: 'fas fa-industry',
      title: 'Production Planning',
      description: 'Integrated production scheduling with quality control checkpoints'
    },
    {
      icon: 'fas fa-chart-bar',
      title: 'Comprehensive Reports',
      description: 'Detailed analytics covering sales, inventory, and production metrics'
    }
  ];

  testimonials: Testimonial[] = [
    {
      quote: "The warehouse management system has transformed our operations completely. The efficiency gains and accuracy improvements have been remarkable across our entire production chain.",
      author: "Stefan Jovanov",
      position: "Operations Manager at Rima-Term"
    }
  ];

  metrics = [
    { value: '35%', label: 'Efficiency Increase', ariaLabel: 'Efficiency increased by 35 percent' },
    { value: '85%', label: 'Reduced Errors', ariaLabel: 'Errors reduced by 85 percent' },
    { value: '50%', label: 'Faster Processing', ariaLabel: 'Processing speed improved by 50 percent' },
    { value: '40%', label: 'Cost Reduction', ariaLabel: 'Costs reduced by 40 percent' }
  ];

  projectTeam = [
    'Solution Architect',
    'Frontend Developer',
    'Backend Developer',
    'QA Engineer',
    'Project Manager',
    'UX Designer'
  ];

  ngOnInit() {
    this.setupSEO();
    this.addStructuredData();
    try {
      this.setupAnalytics();
    } catch (error) {
      console.warn('Analytics not available:', error);
    }
  }

  private setupSEO() {
    const title = 'Rima-Term Case Study - Warehouse Management System | Your Company';
    const description = 'Discover how we helped Rima-Term achieve 35% efficiency increase with our custom Warehouse Management System. Leading food production digital transformation case study.';

    this.title.setTitle(title);
    this.meta.addTags([
      { name: 'description', content: description },
      { name: 'keywords', content: 'warehouse management system, food production, inventory control, Rima-Term, digital transformation, Macedonia' },
      { name: 'author', content: 'Your Company Name' },
      { name: 'robots', content: 'index, follow' },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://yourcompany.com/assets/projects/rima-term/hero/rima-hero.webp' },
      { property: 'og:type', content: 'website' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://yourcompany.com/assets/projects/rima-term/hero/rima-hero.webp' }
    ]);
  }

  private addStructuredData() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'CaseStudy',
      'name': 'Rima-Term Warehouse Management System Implementation',
      'description': 'Implementation of a comprehensive warehouse management system for Rima-Term, a leading food production company in Macedonia.',
      'provider': {
        '@type': 'Organization',
        'name': 'Your Company Name',
        'url': 'https://yourcompany.com'
      },
      'customer': {
        '@type': 'Organization',
        'name': 'Rima-Term',
        'location': {
          '@type': 'Place',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Skopje',
            'addressCountry': 'Macedonia'
          }
        }
      },
      'about': {
        '@type': 'Product',
        'name': 'Warehouse Management System',
        'description': 'Custom warehouse and inventory management solution'
      },
      'result': {
        '@type': 'Thing',
        'name': 'Business Improvements',
        'description': '35% efficiency increase, 85% error reduction, 50% faster processing'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  private setupAnalytics() {
    try {
      gtag('config', 'YOUR-GA-ID', {
        'page_title': 'Rima-Term Case Study',
        'page_path': '/projects/rima-term'
      });
    } catch (error) {
      console.warn('Google Analytics not initialized:', error);
    }
  }

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  trackEvent(eventName: string, eventData: any): void {
    try {
      gtag('event', eventName, eventData);
    } catch (error) {
      console.warn('Error tracking event:', error);
    }
  }
}
