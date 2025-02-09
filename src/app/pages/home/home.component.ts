import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('testimonialContainer', { static: false }) testimonialContainer!: ElementRef;

  ngAfterViewInit(): void {
  }

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
