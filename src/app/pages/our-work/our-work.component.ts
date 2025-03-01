import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class OurWorkComponent {
  projects = [
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
  ];

  navigateToProject(route: string) {
    window.location.href = `/our-work/${route}`;
  }
}
