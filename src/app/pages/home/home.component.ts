import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials/testimonials.component';
import { CommonModule } from '@angular/common';
import { 
  siApachekafka,
  siOpenjdk,
  siSpringboot,
  siAngular,
  siDocker,
  siKubernetes,
  siPostgresql,
  siReact,
  siMongodb,
  siRedis,
  siApache,
  siRabbitmq,
  siWordpress,
  siJavascript,
  siTypescript,
  siCss3,
  siHtml5
} from 'simple-icons';

interface TechStack {
  title: string;
  icon: {
    path: string;
    hex: string;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [TestimonialsComponent, CommonModule]
})
export class HomeComponent {
  techStack: TechStack[] = [
    { title: 'Kafka', icon: siApachekafka },
    { title: 'Java', icon: siOpenjdk },
    { title: 'Spring Boot', icon: siSpringboot },
    { title: 'Angular', icon: siAngular },
    { title: 'React', icon: siReact },
    { title: 'Docker', icon: siDocker },
    { title: 'Kubernetes', icon: siKubernetes },
    { title: 'PostgreSQL', icon: siPostgresql },
    { title: 'MongoDB', icon: siMongodb },
    { title: 'Redis', icon: siRedis },
    { title: 'Apache', icon: siApache },
    { title: 'RabbitMQ', icon: siRabbitmq },
    { title: 'Wordpress', icon: siWordpress },
    { title: 'JavaScript', icon: siJavascript },
    { title: 'TypeScript', icon: siTypescript },
    { title: 'HTML', icon: siHtml5 },
    { title: 'CSS', icon: siCss3 },
  ];
}
