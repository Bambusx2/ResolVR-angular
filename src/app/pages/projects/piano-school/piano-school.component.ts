import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-piano-school',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './piano-school.component.html',
  styleUrls: ['./piano-school.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'translateY(20px)',
          boxShadow: '0 0 0 rgba(17, 196, 185, 0)'
        }),
        animate('0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ 
            opacity: 1, 
            transform: 'translateY(0)',
            boxShadow: '0 15px 30px rgba(17, 196, 185, 0.15)'
          })
        )
      ])
    ]),
    trigger('staggerFade', [
      transition(':enter', [
        query('.metric, img', [
          style({ 
            opacity: 0, 
            transform: 'translateY(20px)',
            boxShadow: '0 0 0 rgba(17, 196, 185, 0)'
          }),
          stagger(100, [
            animate('0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
              style({ 
                opacity: 1, 
                transform: 'translateY(0)',
                boxShadow: '0 15px 30px rgba(17, 196, 185, 0.15)'
              })
            )
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class PianoSchoolComponent {
  metrics = [
    { value: '30+', label: 'Students Taught' },
    { value: '500+', label: 'Piano Lessons Given' },
    { value: '10+', label: 'Years Experience' },
    { value: '100%', label: 'Student Satisfaction' }
  ];

  features = [
    {
      "icon": "fas fa-music",
      "title": "Interactive Lessons",
      "description": "Professor Gorgieva's engaging piano lessons, now digitally accessible to all students."
    },
    {
      "icon": "fas fa-star",
      "title": "Progress Tracking",
      "description": "Direct communication with Professor Gorgieva for personalized guidance and support."
    },
    {
      "icon": "fas fa-gamepad",
      "title": "Engaging Learning",
      "description": "Professor's proven teaching methods combined with modern digital tools."
    },
    {
      "icon": "fas fa-graduation-cap",
      "title": "Expert Curriculum",
      "description": "Professional curriculum developed by Professor Gorgieva based on years of teaching experience."
    },
    {
      "icon": "fas fa-mobile-alt",
      "title": "Flexible Learning",
      "description": "Access Professor Gorgieva's lessons and exercises anytime, anywhere."
    },
    {
      "icon": "fas fa-users",
      "title": "Personal Guidance",
      "description": "Receive direct feedback and tips from Professor Gorgieva to improve your piano skills."
    }
  ];

  testimonials = [
    {
      quote: "This platform has revolutionized how I connect with my students. It allows me to provide personalized guidance while making piano learning more accessible and engaging for everyone.",
      author: "Professor Bisera Ivanova Gorgieva",
      position: "Piano Instructor & Music Educator"
    }
  ];

  screenshots = [
    {
      src: 'assets/projects/piano-school/app/learn.png',
      alt: 'Interactive Learning Interface',
      caption: 'Smart Learning Platform',
      description: "'Professor Gorgieva's interactive piano lessons with real-time guidance'"
    },
    {
      src: 'assets/projects/piano-school/app/listen.png',
      alt: 'Sheet Music Player',
      caption: 'Practice & Learn',
      description: "'Follow along with Professor Gorgieva's curated compositions and instructions'"
    },
    {
      src: 'assets/projects/piano-school/app/chat.png',
      alt: 'Professor Chat Interface',
      caption: 'Direct Communication',
      description: 'Instant connection with Professor Gorgieva for personalized feedback and support'
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
