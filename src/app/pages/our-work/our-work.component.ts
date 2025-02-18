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
      logo: 'assets/logos/kontron.png', 
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
      name: 'CityGym', 
      client: 'City Gym Australia', 
      image: 'assets/projects/city-gym/hero/hero1.png', 
      logo: 'assets/logos/enbravia.png', 
      route: 'city-gym' 
    },
  ];

  navigateToProject(route: string) {
    window.location.href = `/our-work/${route}`;
  }
}
