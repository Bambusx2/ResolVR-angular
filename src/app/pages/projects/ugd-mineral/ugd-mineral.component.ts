import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ugd-mineral',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './ugd-mineral.component.html',
  styleUrls: ['./ugd-mineral.component.css']
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
      quote: "MineralExplorer has revolutionized our research capabilities at UGD. The platform's advanced analysis tools and intuitive interface have significantly improved our research workflow.",
      author: "Prof. Dr. Tena Sijakova Ivanova",
      position: "Faculty of Natural and Technical Sciences"
    }
  ];

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollButton = this.el.nativeElement.querySelector('.scroll-top');
    if (scrollButton) {
      if (window.scrollY > 300) {
        scrollButton.classList.add('visible');
      } else {
        scrollButton.classList.remove('visible');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
