import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

interface Project {
  name: string;
  client: string;
  image: string;
  logo: string;
  route: string;
}

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(20px)'
        }),
        animate('0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          style({
            opacity: 1,
            transform: 'translateY(0)'
          })
        )
      ])
    ])
  ]
})
export class ProjectCardsComponent implements OnInit {
  @Input() currentProjectRoute: string = '';

  randomProjects: Project[] = [];

  private allProjects: Project[] = [
    {
      name: 'Smart Hotel',
      client: 'Hotel Park',
      image: 'assets/projects/hotel-park/app/overview.webp',
      logo: 'assets/logos/hotel_park1.webp',
      route: 'hotel-park'
    },
    {
      name: 'Mineral Explorer',
      client: 'University of Goce Delchev',
      image: 'assets/projects/ugd-mineral/app/overview.webp',
      logo: 'assets/logos/ugd.webp',
      route: 'ugd-mineral'
    },
    {
      name: 'MusicSheetKids',
      client: 'BIG Piano School',
      image: 'assets/projects/piano-school/app/overview.webp',
      logo: 'assets/logos/pianoSchool.webp',
      route: 'piano-school'
    },
    {
      name: 'Warehouse Management',
      client: 'Gichev Trejd',
      image: 'assets/projects/gichev-trejd/app/overview.webp',
      logo: 'assets/logos/gichevTrejd.webp',
      route: 'gichev-trejd'
    },
    {
      name: 'Rima Term Control System',
      client: 'Rima Term',
      image: 'assets/projects/rima-term/hero/rima-hero.webp',
      logo: 'assets/logos/rimaTerm.webp',
      route: 'rimaterm'
    },
    {
      name: 'CityGym',
      client: 'City Gym Australia',
      image: 'assets/projects/city-gym/hero/hero1.webp',
      logo: 'assets/logos/cityGym.webp',
      route: 'city-gym'
    },
    {
      name: 'Team augmentation',
      client: 'Iskratel',
      image: 'assets/projects/iskratel/iskratel-team.webp',
      logo: 'assets/logos/iskratel.webp',
      route: 'iskratel'
    },
    {
      name: 'Team augmentation',
      client: 'Kontron',
      image: 'assets/projects/kontron/kontron-team.webp',
      logo: 'assets/logos/kontron.webp',
      route: 'kontron'
    }
  ];;

  ngOnInit() {
    const filteredProjects = this.allProjects.filter(p => p.route !== this.currentProjectRoute);
    this.randomProjects = this.shuffleArray(filteredProjects).slice(0, 3);
  }

  private shuffleArray(array: Project[]): Project[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}
