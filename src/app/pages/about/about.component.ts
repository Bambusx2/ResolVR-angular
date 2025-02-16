import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  stats = [
    { icon: 'fa-rocket', title: 'Innovation That Drives Results', description: 'Leading-edge solutions with measurable business impact.' },
    { icon: 'fa-chart-simple', title: 'AI-Powered Scalability', description: 'Future-proof technology designed for sustainable growth.' },
    { icon: 'fa-globe', title: 'Global Expertise', description: 'Delivering proven success across diverse industries.' },
    { icon: 'fa-lock', title: 'Enterprise-Grade Security', description: 'Robust compliance, security, and risk mitigation.' }
  ];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initIntersectionObserver();
  }

  private initIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all animated elements
    const elements = this.el.nativeElement.querySelectorAll(
      '.feature-card, .stat-card, .quote-card, .about-image, .about-content, .extra-content, .extra-image'
    );
    elements.forEach((el: Element) => observer.observe(el));
  }
}
