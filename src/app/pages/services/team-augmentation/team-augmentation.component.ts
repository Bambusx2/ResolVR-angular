import { Component, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

interface ExpertiseGroup {
  title: string;
  description: string;
  specialties: string[];
}

@Component({
  selector: 'app-team-augmentation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-augmentation.component.html',
  styleUrls: ['./team-augmentation.component.css']
})
export class TeamAugmentationComponent implements OnInit {
  expertise = signal<ExpertiseGroup[]>([
    {
      title: 'Backend Engineering',
      description: 'Building robust, scalable server-side solutions with our core expertise in Java',
      specialties: ['Java', 'Spring Boot', 'PHP', 'Node.js', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Frontend Development',
      description: 'Expert UI/UX specialists building modern, responsive interfaces',
      specialties: ['Angular', 'React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Responsive Design']
    },
    {
      title: 'DevOps & Infrastructure',
      description: 'Infrastructure and deployment automation specialists',
      specialties: ['Docker', 'CI/CD Pipelines', 'Linux Administration', 'Nginx/Apache', 'Kubernetes']
    },
    {
      title: 'Quality Assurance',
      description: 'Ensuring high-quality, bug-free applications through rigorous testing',
      specialties: ['Manual Testing', 'Automated Testing', 'Performance Testing', 'Test Planning']
    },
    {
      title: 'CMS & E-commerce',
      description: 'Building and maintaining content-managed websites and online stores',
      specialties: ['WordPress', 'WooCommerce', 'Custom WordPress Themes', 'WordPress Plugins']
    },
    {
      title: 'Mobile Development',
      description: 'Creating seamless mobile experiences across platforms',
      specialties: ['React Native', 'Progressive Web Apps (PWA)', 'Hybrid Applications']
    },
    {
      title: 'Enterprise Solutions',
      description: 'Implementing and customizing business management systems',
      specialties: ['Microsoft Dynamics', 'ERP Integration', 'Business Process Automation', 'Custom Solutions']
    }
  ]);

  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.initSEO();
  }

  private initSEO() {
    this.title.setTitle('Elite Team Augmentation & Staff Augmentation Services | ResolVR');
    
    this.meta.addTags([
      { name: 'description', content: 'Scale your development team with top-tier developers. Expert staff augmentation services with pre-vetted senior engineers from Macedonia.' },
      { name: 'keywords', content: 'team augmentation, staff augmentation, developers, hire developers, development team, Macedonia developers, IT staffing, remote developers' },
      { property: 'og:title', content: 'Elite Team Augmentation & Staff Augmentation Services | ResolVR' },
      { property: 'og:description', content: 'Scale your development team with top-tier developers. Expert staff augmentation services with pre-vetted senior engineers from Macedonia.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://resolvr.dev/services/team-augmentation' },
      { property: 'og:image', content: 'https://resolvr.dev/assets/images/team-augmentation.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@resolvr' },
      { name: 'twitter:creator', content: '@resolvr' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'ResolVR' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://resolvr.dev/services/team-augmentation' },
      { name: 'article:published_time', content: new Date().toISOString() },
      { name: 'article:author', content: 'ResolVR' },
      { name: 'article:section', content: 'Services' }
    ]);
  }
}
