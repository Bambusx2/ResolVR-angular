import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-piano-school',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './piano-school.component.html',
  styleUrls: ['./piano-school.component.css']
})
export class PianoSchoolComponent {
  metrics = [
    { value: '30+', label: 'Active Students' },
    { value: '500+', label: 'Piano Lessons' },
    { value: '50+', label: 'Awards Won' },
    { value: '100%', label: 'Happy Parents' }
  ];

  features = [
    {
      "icon": "fas fa-music",
      "title": "Interactive Lessons",
      "description": "Fun, engaging piano lessons designed specifically for children."
    },
    {
      "icon": "fas fa-star",
      "title": "Progress Tracking",
      "description": "Stay connected with a built-in chat system for instant support and guidance."
    },
    {
      "icon": "fas fa-gamepad",
      "title": "Gamified Learning",
      "description": "Turn piano practice into an exciting game with rewards and achievements."
    },
    {
      "icon": "fas fa-graduation-cap",
      "title": "Structured Curriculum",
      "description": "Professional curriculum designed by expert piano teachers."
    },
    {
      "icon": "fas fa-mobile-alt",
      "title": "Practice Anytime, Anywhere",
      "description": "Access lessons and exercises on any device for flexible learning."
    },
    {
      "icon": "fas fa-users",
      "title": "Personalized Assistance",
      "description": "Get real-time feedback and personalized tips to improve your piano skills."
    }
  ];

  testimonials = [
    {
      quote: "My daughter loves practicing piano now! The app makes it fun and engaging.",
      author: "Sarah Johnson",
      position: "Parent of Amy, 8"
    },
    {
      quote: "The best investment in my child's musical education. Simple yet effective.",
      author: "Michael Chen",
      position: "Parent of Kevin, 10"
    }
  ];

  screenshots = [
    {
      src: 'assets/projects/piano-school/app/learn.png',
      alt: 'Interactive Learning Interface',
      caption: 'Smart Learning System',
      description: 'Interactive piano lessons with real-time feedback and step-by-step guidance'
    },
    {
      src: 'assets/projects/piano-school/app/listen.png',
      alt: 'Sheet Music Player',
      caption: 'Listen & Practice',
      description: 'Listen to compositions, follow along with highlighted notes, and practice at your own pace'
    },
    {
      src: 'assets/projects/piano-school/app/chat.png',
      alt: 'Professor Chat Interface',
      caption: 'Expert Guidance',
      description: 'Direct communication with professional piano teachers for personalized feedback and support'
    }
  ];

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
}
