import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CareerPosition {
  title: string;
  icon: string;
  description: string;
  requirements: string[];
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
  // Add animation state tracking
  hoveredIndex: number = -1;

  careers: CareerPosition[] = [
    {
      title: 'Frontend Developer',
      icon: 'fas fa-code',
      description: 'Build and maintain stunning user interfaces using Angular, React, and modern frontend frameworks.',
      requirements: [
        'Proficiency in Angular and React',
        'Understanding of HTML, CSS, and JavaScript',
        'Experience with responsive design'
      ]
    },
    {
      title: 'Backend Developer',
      icon: 'fas fa-server',
      description: 'Develop robust APIs and server-side logic using Java, Spring Boot, and modern backend technologies.',
      requirements: [
        'Experience in Java and Spring Boot',
        'Knowledge of REST APIs and databases',
        'Problem-solving mindset'
      ]
    },
    {
      title: 'Project Manager',
      icon: 'fas fa-users',
      description: 'Lead teams, manage projects, and ensure timely delivery with excellence.',
      requirements: [
        'Strong leadership and communication skills',
        'Experience in Agile methodologies',
        'Ability to manage multiple projects'
      ]
    },
    {
      title: 'QA Engineer',
      icon: 'fas fa-bug',
      description: 'Ensure software quality through testing and debugging in an Agile environment.',
      requirements: [
        'Experience in manual and automated testing',
        'Knowledge of QA tools and processes',
        'Attention to detail'
      ]
    },
    {
      title: 'UI/UX Designer',
      icon: 'fas fa-pencil-alt',
      description: 'Create intuitive and visually appealing designs for a seamless user experience.',
      requirements: [
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Understanding of user-centric design principles',
        'Experience with wireframing and prototyping'
      ]
    },
    {
      title: 'DevOps Engineer',
      icon: 'fas fa-tools',
      description: 'Build and maintain CI/CD pipelines and ensure high system reliability and scalability.',
      requirements: [
        'Experience with Docker and Kubernetes',
        'Knowledge of cloud platforms like AWS, Azure, or GCP',
        'Problem-solving mindset'
      ]
    },
    {
      title: 'WordPress Developer',
      icon: 'fab fa-wordpress',
      description: 'Build and maintain modern, high-performance websites using WordPress and related technologies.',
      requirements: [
        'Proficiency in WordPress theme and plugin development',
        'Experience with PHP, HTML, CSS, and JavaScript',
        'Understanding of SEO best practices'
      ]
    }
  ];

  setHoveredCard(index: number) {
    this.hoveredIndex = index;
  }

  clearHoveredCard() {
    this.hoveredIndex = -1;
  }
}
