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

interface Partner {
  name: string;
  logo: string;
  alt: string;
  website?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [TestimonialsComponent, CommonModule]
})
export class HomeComponent implements AfterViewInit {
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

  partners: Partner[] = [
    {
      name: 'Iskratel',
      logo: 'assets/logos/iskratel.png',
      alt: 'Iskratel - A Leading European ICT Provider',
      website: 'https://www.iskratel.com'
    },
    {
      name: 'Kontron',
      logo: 'assets/logos/kontron.png',
      alt: 'Kontron - Global Leader in IoT/Embedded Computing Technology',
      website: 'https://www.kontron.com'
    },
    {
      name: 'Gazprom',
      logo: 'assets/logos/gazprom.png',
      alt: 'Gazprom - Global Energy Company',
      website: 'https://www.gazprom.com'
    },
    {
      name: 'Hotel Park',
      logo: 'assets/logos/hotel_park1.png',
      alt: 'Hotel Park - Luxury Accommodation',
      website: 'https://www.hotelpark.mk'
    },
    {
      name: 'Rimac',
      logo: 'assets/logos/rimac.svg',
      alt: 'Rimac - Electric Hypercar Manufacturer',
      website: 'https://www.rimac-automobili.com'
    },
    {
      name: 'SPAR ICS',
      logo: 'assets/logos/spar3.png',
      alt: 'SPAR ICS - Retail Technology Solutions',
      website: 'https://www.spar-ics.com'
    },
    {
      name: 'Meyer & Meyer',
      logo: 'assets/logos/mm.svg',
      alt: 'Meyer & Meyer - Fashion Logistics',
      website: 'https://www.meyer-meyer.com'
    },
    {
      name: 'University of Goce Delchev',
      logo: 'assets/logos/ugd.png',
      alt: 'University of Goce Delchev - Higher Education',
      website: 'https://www.ugd.edu.mk'
    },
    {
      name: 'Elektro Ljubljana',
      logo: 'assets/logos/elj.svg',
      alt: 'Elektro Ljubljana - Energy Distribution',
      website: 'https://www.elektro-ljubljana.si'
    },
    {
      name: 'Makpetrol',
      logo: 'assets/logos/makpetrol3.png',
      alt: 'Makpetrol - Energy Company',
      website: 'https://www.makpetrol.com.mk'
    },
    {
      name: 'UNICEF',
      logo: 'assets/logos/unicef.png',
      alt: 'UNICEF - United Nations Children\'s Fund',
      website: 'https://www.unicef.org'
    },
    {
      name: 'RimaTerm',
      logo: 'assets/logos/rimaTerm2.png',
      alt: 'RimaTerm',
      website: 'https://www.rimaterm.mk'
    }
  ];

  ngAfterViewInit() {
    // Implementation will be added when needed for partner carousel initialization
  }
}
