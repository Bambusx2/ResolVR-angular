import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ugd-mineral',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ugd-mineral.component.html',
  styleUrls: ['./ugd-mineral.component.css']
})
export class UgdMineralComponent {
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

  screenshots = [
    {
      src: 'assets/projects/ugd-mineral/app/overview.png',
      alt: 'Trend Analysis Dashboard',
      caption: 'Interactive trend analysis dashboard showing mineral data patterns over time',
      description: 'Our advanced dashboard provides real-time insights into mineral trends and patterns, enabling data-driven decision making for mining operations.'
    },
    {
      src: 'assets/projects/ugd-mineral/app/operations.png',
      alt: 'Mineral Data Management',
      caption: 'Comprehensive mineral data table with filtering and management capabilities',
      description: 'Efficiently manage and organize mineral data with our powerful filtering and sorting tools, designed for optimal workflow management.'
    },
    {
      src: 'assets/projects/ugd-mineral/app/comparison.png',
      alt: 'Mineral Properties Comparison',
      caption: 'Advanced comparison tool for analyzing mineral characteristics and properties',
      description: 'Compare multiple minerals side by side, analyzing their properties, composition, and market values with our intuitive comparison interface.'
    },
    {
      src: 'assets/projects/ugd-mineral/app/reports.png',
      alt: 'Mining Reports Generation',
      caption: 'Detailed reporting system for mineral extraction and analysis data',
      description: 'Generate comprehensive reports with customizable templates, perfect for stakeholder presentations and regulatory compliance.'
    }
  ];

  features = [
    {
      title: 'Interactive Data Analysis',
      description: 'Real-time trend analysis and data visualization tools for monitoring mineral properties and market values.',
      icon: '📊'
    },
    {
      title: 'Advanced Comparison Tools',
      description: 'Side-by-side comparison of mineral properties including hardness, density, and chemical composition.',
      icon: '🔍'
    },
    {
      title: 'Comprehensive Reports',
      description: 'Generate detailed reports on mineral extraction rates, regional analysis, and mining operations across Europe.',
      icon: '📑'
    },
    {
      title: 'Data Management System',
      description: 'Efficient database system for managing mineral information, locations, and historical data.',
      icon: '💾'
    },
    {
      title: 'Research Integration',
      description: 'Seamless integration with research methodologies and academic standards for mineral analysis.',
      icon: '🔬'
    },
    {
      title: 'Collaborative Platform',
      description: 'Enhanced collaboration tools for research teams and industry professionals working on mineral studies.',
      icon: '🤝'
    }
  ];

  testimonials = [
    {
      quote: "MineralExplorer represents a significant advancement in mineral analysis technology. Its comprehensive features and intuitive interface make it an invaluable tool for both academic research and industry applications.",
      author: "Prof. Dr. Tena Sijakova Ivanova",
      position: "Full Professor",
      company: "Faculty of Natural and Technical Sciences"
    }
  ];
}
