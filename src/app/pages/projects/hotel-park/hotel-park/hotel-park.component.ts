import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-park',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './hotel-park.component.html',
  styleUrls: ['./hotel-park.component.css']
})
export class HotelParkComponent {
  heroImages = [
    { src: 'assets/projects/hotel-park/hero/image1.png', alt: 'Start Tracking' },
    { src: 'assets/projects/hotel-park/hero/image2.png', alt: 'Live Smartly' },
    { src: 'assets/projects/hotel-park/hero/image3.png', alt: 'Control Center' },
    { src: 'assets/projects/hotel-park/hero/image4.png', alt: 'Cut Expenses' },
    { src: 'assets/projects/hotel-park/hero/image5.png', alt: 'Control' }
  ];

  challenges = [
    { icon: 'fas fa-plug', text: 'Integrating multiple IoT devices for smart room control' },
    { icon: 'fas fa-server', text: 'Building a scalable and highly available backend infrastructure' },
    { icon: 'fas fa-mobile-alt', text: 'Designing an intuitive and user-friendly mobile interface' },
    { icon: 'fas fa-bolt', text: 'Optimizing energy management and automation features' }
  ];

  galleryItems = [
    { 
      src: 'assets/projects/hotel-park/add-device.png', 
      alt: 'Add Device Screen', 
      caption: 'Adding a device seamlessly.' 
    },
    { 
      src: 'assets/projects/hotel-park/device-connected.png', 
      alt: 'Device Connected', 
      caption: 'Easy device integration & automation.' 
    },
    { 
      src: 'assets/projects/hotel-park/connected-rooms.png', 
      alt: 'Connected Rooms Overview', 
      caption: 'Room automation & device control.' 
    }
  ];

  features = [
    {
      src: 'assets/projects/hotel-park/control-center.png',
      alt: 'Control Center',
      title: 'Control Center',
      description: 'Manage all smart devices efficiently.'
    },
    {
      src: 'assets/projects/hotel-park/climate-control.png',
      alt: 'AC Control',
      title: 'Climate Control',
      description: 'Adjust heating, cooling, and energy usage in real-time.'
    },
    {
      src: 'assets/projects/hotel-park/overview.png',
      alt: 'Energy Saving',
      title: 'Energy Insights',
      description: 'Track real-time energy consumption to optimize costs.'
    }
  ];
}