import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectCardsComponent } from '../../../shared/project-cards/project-cards.component';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

// Add interface for testimonial type
interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

@Component({
  selector: 'app-gichev-trejd',
  templateUrl: './gichev-trejd.component.html',
  styleUrls: ['./gichev-trejd.component.css'],
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
export class GichevTrejdComponent {
  projectTeam = [
    'Lead Developer',
    'UI/UX Designer',
    'Backend Developer',
    'DevOps Engineer'
  ];

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
      description: 'Real-time inventory tracking and analytics dashboard'
    },
    {
      src: 'assets/projects/gichev-trejd/app/inventory.png',
      alt: 'Inventory Management',
      caption: 'Smart Inventory Control',
      description: 'Automated stock management with predictive analytics'
    },
    {
      src: 'assets/projects/gichev-trejd/app/order.png',
      alt: 'Order Processing',
      caption: 'Streamlined Orders',
      description: 'Efficient order processing and tracking system'
    }
  ];

  testimonials: Testimonial[] = [
    {
      quote: "The development team delivered an exceptional warehouse management system that transformed our operations. Their understanding of our needs and ability to implement complex logistics workflows exceeded our expectations.",
      author: "Viktor Gichev",
      position: "CEO at Gichev Trejd"
    },
    {
      quote: "The system has revolutionized our inventory management. The implementation of AI-powered analytics and automation has significantly improved our operational efficiency.",
      author: "Aco Gichev",
      position: "CTO at Gichev Trejd"
    }
  ];

  metrics = [
    { value: '40%', label: 'Efficiency Increase' },
    { value: '90%', label: 'Reduced Stockouts' },
    { value: '60%', label: 'Faster Processing' },
    { value: '45%', label: 'Cost Reduction' }
  ];
}
