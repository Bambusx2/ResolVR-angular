import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceItem {
  title: string;
  description: string;
  tags: string[];
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ServicesComponent implements OnInit {
  @ViewChildren('serviceRow') serviceRows!: QueryList<ElementRef>;

  services: ServiceItem[] = [
    {
      title: 'Enterprise Software Solutions',
      description: `From visionary concepts to market-ready solutions, ResolVR transforms business challenges into technological advantages. Our elite engineering team delivers scalable, future-proof software that drives innovation and accelerates growth.

      • Agile MVP Development
      • Enterprise System Integration
      • Cloud-Native Solutions
      • AI & Machine Learning
      • IoT & Edge Computing`,
      tags: ['Digital Transformation', 'Cloud Solutions', 'Enterprise Software'],
      ctaText: 'Start Your Digital Journey →',
      ctaLink: '/contact-us',
      imageSrc: '/assets/images/enterprise-solutions.webp',
      imageAlt: 'Enterprise Software Development Solutions'
    },
    // Add other services...
  ];

  ngOnInit() {
    this.observeServiceRows();
  }

  private observeServiceRows() {
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

    this.serviceRows.forEach(row => observer.observe(row.nativeElement));
  }
}
