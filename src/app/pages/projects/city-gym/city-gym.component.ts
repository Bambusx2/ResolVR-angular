import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { ProjectCardsComponent } from '../../../shared/project-cards/project-cards.component';

@Component({
  selector: 'app-city-gym',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProjectCardsComponent
  ],
  templateUrl: './city-gym.component.html',
  styleUrls: ['./city-gym.component.css'],
  animations: [
    trigger('staggerFade', [
      transition(':enter', [
        query('.metric, img, .overview-item', [
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
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'translateY(20px)'
        }),
        animate('0.5s cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ 
            opacity: 1, 
            transform: 'translateY(0)'
          })
        )
      ])
    ])
  ]
})
export class CityGymComponent {
  projectTeam = [
    'Lead Developer',
    'UI/UX Designer',
    'Mobile Developer',
    'QA Specialist'
  ];

  metrics = [
    { value: '1000+', label: 'Active Members' },
    { value: '50+', label: 'Custom Programs' },
    { value: '24/7', label: 'App Availability' },
    { value: '95%', label: 'Member Satisfaction' }
  ];

  features = [
    {
      "icon": "fas fa-dumbbell",
      "title": "Workout Tracking",
      "description": "Custom-built tracking system for CityGym's specific workout programs."
    },
    {
      "icon": "fas fa-trophy",
      "title": "Leaderboards",
      "description": "Competitive features to boost member engagement and motivation."
    },
    {
      "icon": "fas fa-heart",
      "title": "Favorites",
      "description": "Personalized workout saving system for quick member access."
    },
    {
      "icon": "fas fa-bullseye",
      "title": "Goal Setting",
      "description": "Integrated goal tracking aligned with CityGym's training philosophy."
    },
    {
      "icon": "fas fa-mobile-alt",
      "title": "Mobile Access",
      "description": "Seamless mobile experience for CityGym members on the go."
    },
    {
      "icon": "fas fa-users",
      "title": "Community",
      "description": "Built-in social features to strengthen the CityGym community."
    }
  ];

  testimonials = [
    {
      quote: "Working with the development team was an outstanding experience. They understood our vision perfectly and delivered a solution that exceeded our expectations. The app has significantly improved how our members track their fitness journey and engage with our gym.",
      author: "Bill Moore",
      position: "CityGym Owner"
    }
  ];

  screenshots = [
    {
      src: 'assets/projects/city-gym/app/activity-leaderboard.webp',
      alt: 'Activity Leaderboard',
      caption: 'Member Leaderboard',
      description: 'Engaging competition system for CityGym members'
    },
    {
      src: 'assets/projects/city-gym/app/ongoing-workout.webp',
      alt: 'Ongoing Workout',
      caption: 'Workout Tracking',
      description: 'Custom-built tracking for CityGym workouts'
    },
    {
      src: 'assets/projects/city-gym/app/goal.webp',
      alt: 'Goal Setting',
      caption: 'Goal Setting',
      description: 'Personalized goal tracking for members'
    }
  ];

  constructor(private el: ElementRef) {}
}
