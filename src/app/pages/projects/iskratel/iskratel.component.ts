import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { ProjectCardsComponent } from '../../../shared/project-cards/project-cards.component';

@Component({
  selector: 'app-iskratel',
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectCardsComponent],
  templateUrl: './iskratel.component.html',
  styleUrls: ['./iskratel.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'translateY(20px)',
          boxShadow: '0 0 0 rgba(17, 196, 185, 0)'
        }),
        animate('0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ 
            opacity: 1, 
            transform: 'translateY(0)',
            boxShadow: '0 15px 30px rgba(17, 196, 185, 0.15)'
          })
        )
      ])
    ]),
    trigger('staggerFade', [
      transition(':enter', [
        query('.metric-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
              style({ 
                opacity: 1, 
                transform: 'translateY(0)',
                boxShadow: '0 15px 30px rgba(17, 196, 185, 0.15)'
              })
            )
          ])
        ])
      ])
    ])
  ]
})
export class IskratelComponent {
  projectTeam = [
    'Project Manager',
    'Senior Developers',
    'QA Engineers',
    'DevOps Specialists',
    'UI/UX Designers'
  ];

  metrics = [
    { value: '50+', label: 'Team Members' },
    { value: '5+', label: 'Years Partnership' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Coverage' }
  ];

  features = [
    {
      icon: "fas fa-users",
      title: "Team Augmentation",
      description: "Seamless integration of skilled professionals into existing development teams."
    },
    {
      icon: "fas fa-code",
      title: "Custom Development",
      description: "Specialized software development services tailored to specific requirements."
    },
    {
      icon: "fas fa-clock",
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services."
    },
    {
      icon: "fas fa-cogs",
      title: "Process Optimization",
      description: "Streamlined development processes and improved efficiency."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Quality Assurance",
      description: "Comprehensive testing and quality control procedures."
    },
    {
      icon: "fas fa-chart-line",
      title: "Scalable Solutions",
      description: "Flexible resource allocation based on project requirements."
    }
  ];

  testimonials = [
    {
      quote: "The team has consistently delivered high-quality results and demonstrated exceptional technical expertise. Their commitment to excellence and ability to integrate seamlessly with our internal teams has made them an invaluable partner.",
      author: "Darko Vidinikj",
      position: "Product Owner at Iskratel"
    }
  ];

  overview = {
    title: "ResolVR & Iskratel Collaboration",
    description: "At ResolVR, we take pride in our expertise in software development, team augmentation, and offshore outsourcing. Our collaboration with Iskratel, a global provider of broadband solutions, telecommunications, and networking infrastructure, enabled us to contribute to high-quality, scalable software systems tailored to the telecom industry.",
    details: [
      "Leveraging our experience in Java, Spring Boot, microservices architecture, and cloud solutions, we played a key role in optimizing software infrastructure and enhancing digital services for Iskratel. Our team worked closely with Iskratel's experts, ensuring seamless integration of cutting-edge technologies while maintaining security, reliability, and high performance.",
      "Through this partnership, ResolVR successfully streamlined service delivery and reinforced Iskratel's commitment to digital transformation. Our ability to adapt and provide customized solutions helped Iskratel maintain a competitive edge in the evolving telecommunications landscape."
    ]
  };
}
