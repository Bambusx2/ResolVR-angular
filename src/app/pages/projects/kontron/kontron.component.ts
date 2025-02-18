import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-kontron',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './kontron.component.html',
  styleUrls: ['./kontron.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ]),
    trigger('staggerFade', [
      transition(':enter', [
        query('.metric', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class KontronComponent {
  metrics = [
    { value: '3+', label: 'Years of Partnership' },
    { value: '20+', label: 'Engineers Involved' },
    { value: '25+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  features = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Frontend Excellence',
      description: 'Angular-based frontend development with modern architecture.'
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Systems',
      description: 'Robust Java/Spring Boot backend implementations.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Solutions',
      description: 'Advanced cloud integration and optimization.'
    },
    {
      icon: 'fas fa-users-cog',
      title: 'Agile Practices',
      description: 'Scrum methodology and efficient CI/CD processes.'
    }
  ];

  testimonials = [
    {
      quote: "ResolVR has proven to be an invaluable partner in our digital transformation journey. Their technical expertise and commitment to excellence have significantly contributed to our success.",
      author: "Slobodan Jovanovski",
      position: "CEO at Kontron"
    }
  ];

  overview = {
    title: "ResolVR & Kontron Collaboration",
    description: "ResolVR is proud to continue its ongoing partnership with Kontron, a leader in IoT, embedded computing, and high-performance networking solutions. Our collaboration focuses on software development, cloud integration, and backend optimizations, reinforcing Kontron's mission to drive digital transformation across industries.",
    details: [
      "Our team at ResolVR actively contributes to Angular-based frontend projects and Java/Spring Boot backend systems, ensuring seamless functionality, performance, and scalability. Additionally, we assist in mentoring, agile methodologies (Scrum), and CI/CD processes, allowing for efficient software delivery in complex enterprise environments.",
      "By combining our software expertise with Kontron's hardware and IoT capabilities, we help create cutting-edge solutions that drive automation, connectivity, and efficiency across industries. As our collaboration continues, we remain committed to delivering top-tier technology solutions that push the boundaries of innovation and performance."
    ]
  };

  constructor(private el: ElementRef) {}
}
