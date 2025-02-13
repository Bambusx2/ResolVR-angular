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
      name: 'SPAR ICS', 
      client: 'SPAR ICS', 
      image: 'assets/screens/spar_dashboard.png', 
      logo: 'assets/logos/spar.png', 
      route: 'spar-ics' 
    },
    { 
      name: 'Kontron', 
      client: 'Kontron', 
      image: 'assets/screens/kontron_dashboard.png', 
      logo: 'assets/logos/kontron.png', 
      route: 'kontron' 
    },
    { 
      name: 'Warehouse Management', 
      client: 'Gichev Trejd', 
      image: 'assets/projects/gichev-trejd/app/overview.png', 
      logo: 'assets/logos/gichevTrejd.webp', 
      route: 'gichev-trejd' 
    },
    { 
      name: 'Enbravia', 
      client: 'Enbravia', 
      image: 'assets/screens/enbravia_dashboard.png', 
      logo: 'assets/logos/enbravia.png', 
      route: 'enbravia' 
    },
  ];

  navigateToProject(route: string) {
    window.location.href = `/our-work/${route}`;
  }
}
