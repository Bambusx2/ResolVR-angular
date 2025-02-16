import { Component, OnInit, HostListener, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { trigger, transition, style, animate, stagger, query, group } from '@angular/animations';

@Component({
  selector: 'app-gichev-trejd',
  templateUrl: './gichev-trejd.component.html',
  styleUrls: ['./gichev-trejd.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    NgOptimizedImage
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
export class GichevTrejdComponent implements OnInit {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;
  
  imagesLoaded = 0;
  totalImages = 4;
  loading = true;
  parallaxOffset = 0;

  features = [
    {
      icon: 'fas fa-chart-line',
      title: 'Smart Analytics',
      description: 'AI-powered insights and predictive analytics for optimal inventory management'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Real-time Updates',
      description: 'Instant stock tracking and automated alerts for seamless operations'
    },
    {
      icon: 'fas fa-robot',
      title: 'AI Automation',
      description: 'Intelligent automation of routine tasks and inventory optimization'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Enterprise Security',
      description: 'Advanced security protocols with role-based access control'
    },
    {
      icon: 'fas fa-sync',
      title: 'Smart Integration',
      description: 'Seamless integration with existing systems and third-party services'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Ready',
      description: 'Full-featured mobile access for management on the go'
    }
  ];

  screenshots = [
    {
      src: 'assets/projects/gichev-trejd/app/overview.png',
      alt: 'Dashboard Overview',
      caption: 'Intuitive Dashboard',
      description: 'Real-time inventory tracking and analytics dashboard',
      loaded: false
    },
    {
      src: 'assets/projects/gichev-trejd/app/inventory.png',
      alt: 'Inventory Management',
      caption: 'Smart Inventory Control',
      description: 'Automated stock management with predictive analytics',
      loaded: false
    },
    {
      src: 'assets/projects/gichev-trejd/app/order.png',
      alt: 'Order Processing',
      caption: 'Streamlined Orders',
      description: 'Efficient order processing and tracking system',
      loaded: false
    }
  ];

  testimonials = [
    {
      quote: "The system has revolutionized our inventory management. We've seen a 40% increase in efficiency.",
      author: "Aco Gichev",
      position: "Operations Director",
      company: "Gichev Trejd",
      isVisible: false
    },
    {
      quote: "ResolVR's solution helped us reduce stockouts by 90% and improve customer satisfaction.",
      author: "Viktor Gichev",
      position: "CEO",
      company: "Gichev Trejd",
      isVisible: false
    }
  ];

  metrics = [
    { value: '40%', label: 'Efficiency Increase' },
    { value: '90%', label: 'Reduced Stockouts' },
    { value: '60%', label: 'Faster Processing' },
    { value: '45%', label: 'Cost Reduction' }
  ];

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.initScrollToTop();
    this.checkTestimonialVisibility();
    this.initScrollAnimations();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.handleScrollToTop();
    this.handleParallax();
    this.checkTestimonialVisibility();
  }

  private handleScrollToTop() {
    const scrollButton = document.querySelector('.scroll-top') as HTMLElement;
    if (scrollButton) {
      if (window.pageYOffset > 300) {
        scrollButton.style.opacity = '1';
        scrollButton.style.transform = 'translateY(0)';
      } else {
        scrollButton.style.opacity = '0';
        scrollButton.style.transform = 'translateY(20px)';
      }
    }
  }

  private handleParallax() {
    this.parallaxOffset = window.pageYOffset * 0.5;
    const heroSection = document.querySelector('.hero-section') as HTMLElement;
    if (heroSection) {
      heroSection.style.transform = `translateY(${this.parallaxOffset * 0.5}px)`;
    }
  }

  private checkTestimonialVisibility() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.8;
      if (isVisible && !this.testimonials[index].isVisible) {
        setTimeout(() => {
          this.testimonials[index].isVisible = true;
        }, 200);
      }
    });
  }

  onImageLoad() {
    this.imagesLoaded++;
    if (this.imagesLoaded === this.totalImages) {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private initScrollToTop() {
    const scrollButton = document.querySelector('.scroll-top') as HTMLElement;
    if (scrollButton) {
      scrollButton.style.opacity = '0';
      scrollButton.style.transform = 'translateY(20px)';
    }
  }

  private initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
  }

  onFeatureHover(feature: any, isHovered: boolean) {
    feature.isHovered = isHovered;
  }
}
