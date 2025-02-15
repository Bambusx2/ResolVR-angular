import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gichev-trejd',
  templateUrl: './gichev-trejd.component.html',
  styleUrls: ['./gichev-trejd.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class GichevTrejdComponent implements OnInit {
  imagesLoaded = 0;
  totalImages = 4;
  loading = true;
  parallaxOffset = 0;

  features = [
    {
      icon: '📊',
      title: 'Real-time Tracking',
      description: 'Monitor inventory levels and stock movements with instant updates and alerts',
      isHovered: false
    },
    {
      icon: '🔄',
      title: 'Automated Workflows',
      description: 'Streamline operations with automated stock alerts and order processing',
      isHovered: false
    },
    {
      icon: '📱',
      title: 'User-friendly Interface',
      description: 'Intuitive design for efficient inventory and order management',
      isHovered: false
    },
    {
      icon: '🤝',
      title: 'Vendor Integration',
      description: 'Seamless communication and order management with suppliers',
      isHovered: false
    },
    {
      icon: '📈',
      title: 'Business Analytics',
      description: 'Data-driven insights for better inventory decision making',
      isHovered: false
    },
    {
      icon: '🔐',
      title: 'Secure Access',
      description: 'Role-based permissions and secure data management',
      isHovered: false
    }
  ];

  screenshots = [
    {
      src: 'assets/projects/gichev-trejd/app/inventory.png',
      alt: 'Inventory Management Interface',
      caption: 'Inventory Management',
      description: 'Comprehensive inventory tracking system with real-time stock level monitoring and automated alerts.',
      loaded: false
    },
    {
      src: 'assets/projects/gichev-trejd/app/order.png',
      alt: 'Order Management System',
      caption: 'Order Processing',
      description: 'Streamlined order management interface with vendor selection and efficient processing workflows.',
      loaded: false
    },
    {
      src: 'assets/projects/gichev-trejd/app/overview.png',
      alt: 'Analytics Dashboard',
      caption: 'Analytics Dashboard',
      description: 'Data-driven insights dashboard providing real-time analytics and inventory performance metrics.',
      loaded: false
    }
  ];

  testimonials = [
    {
      quote: 'The Gichev Trejd system has completely transformed our inventory management. We\'ve seen a 90% reduction in stockouts and our order fulfillment rate has improved dramatically. The real-time alerts and automated tracking have made our operations significantly more efficient.',
      author: 'Aco Gichev',
      position: 'Operations Director',
      company: 'Gichev Trejd',
      isVisible: false,
      delay: 0
    },
    {
      quote: 'This platform has revolutionized how we make business decisions. The analytics dashboard provides crystal-clear insights, and the automated workflows have streamlined our entire operation. It\'s been a game-changer for our inventory control and vendor management.',
      author: 'Viktor Gichev',
      position: 'Chief Executive Officer',
      company: 'Gichev Trejd',
      isVisible: false,
      delay: 200
    }
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
        }, this.testimonials[index].delay);
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
