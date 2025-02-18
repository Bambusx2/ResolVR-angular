import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-hotel-park',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hotel-park.component.html',
  styleUrls: ['./hotel-park.component.css'],
  animations: [
    trigger('staggerFade', [
      transition(':enter', [
        query('.metric, img', [
          style({ 
            opacity: 0, 
            transform: 'translateY(20px)',
            boxShadow: '0 0 0 rgba(17, 196, 185, 0)'
          }),
          stagger(100, [
            animate('0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
              style({ 
                opacity: 1, 
                transform: 'translateY(0)',
                boxShadow: '0 15px 30px rgba(17, 196, 185, 0.15)'
              })
            )
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HotelParkComponent {
  metrics = [
    { value: '10+', label: 'Connected Rooms' },
    { value: '30%', label: 'Energy Savings' },
    { value: '24/7', label: 'System Uptime' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  features = [
    {
      "icon": "fas fa-plug",
      "title": "Smart Integration",
      "description": "Seamless integration of multiple IoT devices for comprehensive room control."
    },
    {
      "icon": "fas fa-server",
      "title": "Scalable Infrastructure",
      "description": "Highly available backend system supporting multiple properties and devices."
    },
    {
      "icon": "fas fa-mobile-alt",
      "title": "Mobile Control",
      "description": "Intuitive mobile interface for easy management of all hotel systems."
    },
    {
      "icon": "fas fa-bolt",
      "title": "Energy Management",
      "description": "Advanced energy optimization features for cost reduction."
    },
    {
      "icon": "fas fa-shield-alt",
      "title": "Secure Access",
      "description": "Enterprise-grade security with role-based access control."
    },
    {
      "icon": "fas fa-chart-line",
      "title": "Real-time Analytics",
      "description": "Comprehensive analytics and reporting for informed decision making."
    }
  ];

  testimonials = [
    {
      quote: "The collaboration with the team was fantastic. They understood our needs and built a system that exceeded our expectations. The automation and energy management features have significantly improved our operations.",
      author: "Angel Bogdov",
      position: "Chief Technology Officer"
    }
  ];

  screenshots = [
    {
      src: 'assets/projects/hotel-park/app/control-center.png',
      alt: 'Control Center Interface',
      caption: 'Smart Control Center',
      description: 'Centralized management of all hotel systems and devices'
    },
    {
      src: 'assets/projects/hotel-park/app/ac-control.png',
      alt: 'Climate Control',
      caption: 'Climate Management',
      description: 'Advanced climate control and energy optimization features'
    },
    {
      src: 'assets/projects/hotel-park/app/overview.png',
      alt: 'System Overview',
      caption: 'System Overview',
      description: 'Real-time monitoring and analytics dashboard'
    }
  ];

  constructor(private el: ElementRef) {}
}