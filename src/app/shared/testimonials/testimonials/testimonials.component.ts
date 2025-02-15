import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../../../shared/particles/particles/particles.component';
import { NgxParticlesModule } from "@tsparticles/angular";

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule,
    ParticlesComponent,
    NgxParticlesModule
  ],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements AfterViewInit {
  @ViewChild('testimonialContainer') container!: ElementRef;
  currentIndex = 0;

  testimonials = [
    { 
      logo: 'assets/logos/spar.png',
      alt: 'SPAR ICS Logo',
      text: "ResolVR doesn't just execute tasks—they take the time to understand the why behind them.",
      name: 'Michael Meike',
      position: 'Head of Retail Technologies'
    },
    {
      logo: 'assets/logos/kontron.png',
      alt: 'Kontron Logo',
      text: 'ResolVR has expertly integrated with our team to develop key modules for our dealer management system.',
      name: 'Slobodan Jovanovski',
      position: 'Head of Department'
    },
    {
      logo: 'assets/logos/ugd.png',
      alt: 'UGD Logo',
      text: 'ResolVR is a trusted resource. Their quality, responsiveness, and communication are unparalleled.',
      name: 'Tena Sijakova Ivanova',
      position: 'Head of Department of Petrology and Mineralogy'
    },
    {
      logo: 'assets/logos/hotel_park.jpg',
      alt: 'Hotel Park Logo',
      text: 'ResolVR impressed us with their excellent execution, adaptability, and seamless integration into our processes.',
      name: 'Angel Bogdov',
      position: 'Founder and CEO'
    },
    {
      logo: 'assets/logos/gichevTrejd.webp',
      alt: 'Gichev Trejd Logo',
      text: "ResolVR's strategic insights and innovative solutions have driven transformative growth for our organization.",
      name: 'Viktor Gichev',
      position: 'Founder and CEO'
    },
    {
      logo: 'assets/logos/enbravia.png',
      alt: 'Enbravia Logo',
      text: "ResolVR's integration of cutting-edge solutions has revolutionized our business processes, driving efficiency and innovation.",
      name: 'Alex Spasov',
      position: 'Founder and CEO'
    }
  ];

  private touchStartX = 0;
  private touchEndX = 0;

  ngAfterViewInit(): void {}

  goToSlide(index: number) {
    this.currentIndex = index;
    const container = this.container.nativeElement;
    const cardWidth = container.querySelector('.testimonial-card').offsetWidth;
    const scrollPosition = index * (cardWidth + 25); // 25 is the gap
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }

  isPrevDisabled(): boolean {
    const container = this.container?.nativeElement;
    return container ? container.scrollLeft <= 0 : true;
  }

  isNextDisabled(): boolean {
    const container = this.container?.nativeElement;
    if (!container) { return true; }
    return (container.scrollLeft + container.clientWidth) >= (container.scrollWidth - 5);
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.touches[0].clientX;
  }

  onTouchMove(e: TouchEvent) {
    this.touchEndX = e.touches[0].clientX;
  }

  onTouchEnd() {
    const SWIPE_THRESHOLD = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0 && !this.isNextDisabled()) {
        this.goToSlide(this.currentIndex + 1);
      } else if (diff < 0 && !this.isPrevDisabled()) {
        this.goToSlide(this.currentIndex - 1);
      }
    }
  }

  setActiveTestimonial(index: number) {
    this.currentIndex = index;
  }

  clearActiveTestimonial() {
    this.currentIndex = -1; // No card selected
  }
}
