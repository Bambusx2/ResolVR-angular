import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { trigger, transition, style, animate, stagger, query, group } from '@angular/animations';

@Component({
  selector: 'app-ugd-mineral',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './ugd-mineral.component.html',
  styleUrls: ['./ugd-mineral.component.css'],
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
        query('.metric', [
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
export class UgdMineralComponent {
  metrics = [
    { value: '500+', label: 'Research Samples' },
    { value: '50+', label: 'Published Papers' },
    { value: '100%', label: 'Analysis Accuracy' },
    { value: '24/7', label: 'Platform Availability' }
  ];

  features = [
    {
      icon: "fas fa-microscope",
      title: "Advanced Analysis",
      description: "State-of-the-art mineral analysis tools developed specifically for UGD's research requirements."
    },
    {
      icon: "fas fa-chart-line",
      title: "Data Visualization",
      description: "Custom-built visualization tools for comprehensive mineral data analysis and research."
    },
    {
      icon: "fas fa-database",
      title: "Sample Management",
      description: "Specialized database system for organizing and tracking UGD's mineral research samples."
    },
    {
      icon: "fas fa-flask",
      title: "Research Tools",
      description: "Advanced tools tailored for academic research and mineral property analysis at UGD."
    },
    {
      icon: "fas fa-file-alt",
      title: "Report Generation",
      description: "Automated reporting system designed for UGD's research documentation requirements."
    },
    {
      icon: "fas fa-users",
      title: "Collaboration",
      description: "Enhanced team collaboration features for UGD's research groups and faculty members."
    }
  ];

  screenshots = [
    {
      src: 'assets/projects/ugd-mineral/app/overview.png',
      alt: 'Analysis Dashboard',
      caption: 'Research Dashboard',
      description: 'Custom-built mineral analysis dashboard for UGD research requirements.'
    },
    {
      src: 'assets/projects/ugd-mineral/app/operations.png',
      alt: 'Sample Management',
      caption: 'Sample Management',
      description: "Comprehensive system for managing UGD's mineral samples and research data."
      },
    {
      src: 'assets/projects/ugd-mineral/app/comparison.png',
      alt: 'Data Comparison',
      caption: 'Analysis Tools',
      description: "Specialized tools for comparing and analyzing mineral properties in UGD's research."
    }
  ];

  testimonials = [
    {
      quote: "The mineral exploration platform developed by the team has significantly enhanced our research capabilities. Their expertise in handling complex geological data and creating intuitive visualization tools has made our work much more efficient.",
      author: "Prof. Dr. Tena Sijakova Ivanova",
      position: "Head of Minerology at UGD"
    }
  ];

  constructor(private el: ElementRef) {}

}
