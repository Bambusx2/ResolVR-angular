import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  imports: [CommonModule]
})
export class TestimonialsComponent implements AfterViewInit {
  @ViewChild('testimonialContainer', { static: false }) testimonialContainer!: ElementRef;

  testimonials = [
    { logo: 'assets/logos/spar.png', alt: 'SPAR ICS Logo', text: 'ResolVR doesn’t just execute tasks—they take the time to understand the why behind them.', name: 'Michael Meike', position: 'Head of Retail Technologies' },
    { logo: 'assets/logos/kontron.png', alt: 'Kontron Logo', text: 'ResolVR has expertly integrated with our team to develop key modules for our dealer management system.', name: 'Slobodan Jovanovski', position: 'Head of Department' },
    { logo: 'assets/logos/ugd.png', alt: 'UGD Logo', text: 'ResolVR is a trusted resource. Their quality, responsiveness, and communication are unparalleled.', name: 'Tena Sijakova Ivanova', position: 'Head of Department of Petrology and Mineralogy' },
    { logo: 'assets/logos/hotel_park.jpg', alt: 'Hotel Park Logo', text: 'ResolVR impressed us with their excellent execution, adaptability, and seamless integration into our processes.', name: 'Angel Bogdov', position: 'Founder and CEO' },
    { logo: 'assets/logos/gichev.png', alt: 'Gichev Trejd Logo', text: 'ResolVR’s strategic insights and innovative solutions have driven transformative growth for our organization.', name: 'Viktor Gichev', position: 'Founder and CEO' },
    { logo: 'assets/logos/enbravia.png', alt: 'Enbravia Logo', text: 'ResolVR’s integration of cutting-edge solutions has revolutionized our business processes, driving efficiency and innovation.', name: 'Alex Spasov', position: 'Founder and CEO' }
  ];

  ngAfterViewInit(): void {}

  moveSlide(direction: number): void {
    const container = this.testimonialContainer.nativeElement;
    const card: HTMLElement = container.querySelector('.testimonial-card');
    const gap = 30;
    const cardScrollAmount = card ? card.clientWidth + gap : container.clientWidth;
    container.scrollLeft += direction * cardScrollAmount;
  }

  isPrevDisabled(): boolean {
    const container = this.testimonialContainer?.nativeElement;
    return container ? container.scrollLeft <= 0 : true;
  }

  isNextDisabled(): boolean {
    const container = this.testimonialContainer?.nativeElement;
    if (!container) { return true; }
    return (container.scrollLeft + container.clientWidth) >= (container.scrollWidth - 5);
  }
}
