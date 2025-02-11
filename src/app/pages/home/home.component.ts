import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [TestimonialsComponent]
})
export class HomeComponent {}
