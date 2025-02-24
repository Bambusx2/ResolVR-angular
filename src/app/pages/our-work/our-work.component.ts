import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css'],
  imports: [CommonModule]
})
export class OurWorkComponent {
  projects = [
    { 
      name: 'Smart Hotel', 
      client: 'Hotel Park', 
      image: 'assets/projects/hotel-park/app/overview.png', 
      logo: 'assets/logos/hotel_park.jpg', 
      route: 'hotel-park' 
    },
    { 
      name: 'Mineral Explorer', 
      client: 'University of Goce Delchev', 
      image: 'assets/projects/ugd-mineral/app/overview.png', 
      logo: 'assets/logos/ugd.png', 
      route: 'ugd-mineral' 
    },
    { 
      name: 'MusicSheetKids', 
      client: 'BIG Piano School', 
      image: 'assets/projects/piano-school/app/overview.png', 
      logo: 'assets/logos/pianoSchool.png', 
      route: 'piano-school' 
    },
    { 
      name: 'Warehouse Management', 
      client: 'Gichev Trejd', 
      image: 'assets/projects/gichev-trejd/app/overview.png', 
      logo: 'assets/logos/gichevTrejd.webp', 
      route: 'gichev-trejd' 
    },
    {
      name: 'Rima Term Control System',
      client: 'Rima Term',
      image: 'assets/projects/rima-term/hero/rima-hero.webp',
      logo: 'assets/logos/rimaTerm.png',
      route: 'rimaterm'
    },
    { 
      name: 'CityGym', 
      client: 'City Gym Australia', 
      image: 'assets/projects/city-gym/hero/hero1.png', 
      logo: 'assets/logos/cityGym.png', 
      route: 'city-gym' 
    },
    { 
      name: 'Team augmentation', 
      client: 'Iskratel', 
      image: 'assets/projects/iskratel/iskratel-team.jpg', 
      logo: 'assets/logos/iskratel.png', 
      route: 'iskratel' 
    },
    { 
      name: 'Team augmentation', 
      client: 'Kontron', 
      image: 'assets/projects/kontron/kontron-team.webp', 
      logo: 'assets/logos/kontron.png', 
      route: 'kontron' 
    }
  ];

  navigateToProject(route: string) {
    window.location.href = `/our-work/${route}`;
  }
}
