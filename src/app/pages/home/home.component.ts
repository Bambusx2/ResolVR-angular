import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials/testimonials.component';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
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
export class HomeComponent implements AfterViewInit, OnInit {
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
      logo: 'assets/logos/iskratel.webp',
      alt: 'Iskratel - A Leading European ICT Provider',
      website: 'https://www.iskratel.com'
    },
    {
      name: 'Kontron',
      logo: 'assets/logos/kontron.webp',
      alt: 'Kontron - Global Leader in IoT/Embedded Computing Technology',
      website: 'https://www.kontron.com'
    },
    {
      name: 'Gazprom',
      logo: 'assets/logos/gazprom.webp',
      alt: 'Gazprom - Global Energy Company',
      website: 'https://www.gazprom.com'
    },
    {
      name: 'Hotel Park',
      logo: 'assets/logos/hotel_park1.webp',
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
      logo: 'assets/logos/spar.webp',
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
      logo: 'assets/logos/ugd.webp',
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
      logo: 'assets/logos/makpetrol3.webp',
      alt: 'Makpetrol - Energy Company',
      website: 'https://www.makpetrol.com.mk'
    },
    {
      name: 'UNICEF',
      logo: 'assets/logos/unicef.webp',
      alt: 'UNICEF - United Nations Children\'s Fund',
      website: 'https://www.unicef.org'
    },
    {
      name: 'RimaTerm',
      logo: 'assets/logos/rimaTerm2.webp',
      alt: 'RimaTerm - Healthy food and Oil Industry',
      website: 'https://www.rimaterm.mk'
    },
    {
      name: 'BIG Piano School',
      logo: 'assets/logos/pianoSchoolNoBg.webp',
      alt: 'BIG Piano School - Music Education',
      website: 'https://www.bigpianoschool.com'
    },
    {
      name: 'City Gym',
      logo: 'assets/logos/cityGym.webp',
      alt: 'City Gym - Fitness Center',
      website: 'https://www.citygym.com'
    }
  ];

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'ResolVR - Elite Tech Talent & Scalable Solutions for IT Success',
      description: 'ResolVR provides elite tech talent and scalable software solutions for businesses, specializing in product development, team augmentation, and IoT solutions.',
      keywords: 'tech talent, IT solutions, software development, offshore IT, product development, team augmentation, IoT solutions',
      image: 'https://resolvr.dev/assets/resolvr-logo.webp'
    });

    // Add JSON-LD structured data for better rich snippets
    if (isPlatformBrowser(this.platformId)) {
      this.addStructuredData();
    }
  }

  ngAfterViewInit() {
    // Implementation for partner carousel initialization
  }

  /**
   * Adds JSON-LD structured data to the document head
   */
  private addStructuredData() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    // Structured data for organization
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'ResolVR',
      'url': 'https://resolvr.dev',
      'logo': 'https://resolvr.dev/assets/resolvr-logo.webp',
      'description': 'Elite tech talent & scalable software solutions for businesses.',
      'sameAs': [
        'https://www.linkedin.com/company/resolvr',
        'https://twitter.com/resolvr',
        'https://facebook.com/resolvr'
      ],
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Stip',
        'addressRegion': 'North Macedonia'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+389-77503457',
        'contactType': 'customer support',
        'email': 'contact@resolvr.dev'
      },
      'service': [
        {
          '@type': 'Service',
          'name': 'Product Development',
          'description': 'Custom software product development services.'
        },
        {
          '@type': 'Service',
          'name': 'Team Augmentation',
          'description': 'Flexible technical staffing solutions.'
        },
        {
          '@type': 'Service',
          'name': 'Smart IoT Solutions',
          'description': 'Internet of Things development and integration.'
        }
      ]
    };
    
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}
