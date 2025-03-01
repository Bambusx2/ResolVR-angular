import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductDevelopmentComponent } from './pages/services/product-development/product-development.component';
import { TeamAugmentationComponent } from './pages/services/team-augmentation/team-augmentation.component';
import { ProductImprovementComponent } from './pages/services/product-improvement/product-improvement.component';
import { SmartIotSolutionsComponent } from './pages/services/smart-iot-solutions/smart-iot-solutions.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { HotelParkComponent } from './pages/projects/hotel-park/hotel-park/hotel-park.component';
import { GichevTrejdComponent } from './pages/projects/gichev-trejd/gichev-trejd.component';
import { UgdMineralComponent } from './pages/projects/ugd-mineral/ugd-mineral.component';
import { PianoSchoolComponent } from './pages/projects/piano-school/piano-school.component';
import { CityGymComponent } from './pages/projects/city-gym/city-gym.component';
import { KontronComponent } from './pages/projects/kontron/kontron.component';
import { IskratelComponent } from './pages/projects/iskratel/iskratel.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { RimaTermComponent } from './pages/projects/rima-term/rima-term.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    title: 'ResolVR - Elite Tech Talent & Scalable Solutions',
    data: { preload: true }
  },
  { 
    path: 'about', 
    loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent),
    title: 'About ResolVR - Our Story & Mission',
    data: { preload: true }
  },
  { 
    path: 'services', 
    loadComponent: () => import('./pages/services/services.component').then(c => c.ServicesComponent),
    title: 'Services - ResolVR Software Development & IT Solutions',
    data: { preload: true }
  },
  { 
    path: 'services/product-development', 
    loadComponent: () => import('./pages/services/product-development/product-development.component').then(c => c.ProductDevelopmentComponent),
    title: 'Product Development - Custom Software Solutions | ResolVR'
  },
  { 
    path: 'services/team-augmentation', 
    loadComponent: () => import('./pages/services/team-augmentation/team-augmentation.component').then(c => c.TeamAugmentationComponent),
    title: 'Team Augmentation - Expert IT Staff Solutions | ResolVR'
  },
  { 
    path: 'services/product-improvement', 
    loadComponent: () => import('./pages/services/product-improvement/product-improvement.component').then(c => c.ProductImprovementComponent),
    title: 'Product Improvement - Optimize Your Software | ResolVR'
  },
  { 
    path: 'services/smart-iot-solutions', 
    loadComponent: () => import('./pages/services/smart-iot-solutions/smart-iot-solutions.component').then(c => c.SmartIotSolutionsComponent),
    title: 'Smart IoT Solutions - Innovative Connected Technologies | ResolVR'
  },
  { 
    path: 'careers', 
    loadComponent: () => import('./pages/careers/careers.component').then(c => c.CareersComponent),
    title: 'Careers at ResolVR - Join Our Team'
  },
  { 
    path: 'contact-us', 
    loadComponent: () => import('./pages/contact-us/contact-us.component').then(c => c.ContactUsComponent),
    title: 'Contact ResolVR - Get in Touch With Our Team'
  },
  { 
    path: 'our-work', 
    loadComponent: () => import('./pages/our-work/our-work.component').then(c => c.OurWorkComponent),
    title: 'Our Work - ResolVR Portfolio & Case Studies'
  },
  { 
    path: 'our-work/hotel-park', 
    loadComponent: () => import('./pages/projects/hotel-park/hotel-park/hotel-park.component').then(c => c.HotelParkComponent),
    title: 'Hotel Park Case Study - ResolVR Projects'
  },
  { 
    path: 'our-work/gichev-trejd', 
    loadComponent: () => import('./pages/projects/gichev-trejd/gichev-trejd.component').then(c => c.GichevTrejdComponent),
    title: 'Gichev Trejd Warehouse System - ResolVR Case Study'
  },
  { 
    path: 'our-work/ugd-mineral', 
    loadComponent: () => import('./pages/projects/ugd-mineral/ugd-mineral.component').then(c => c.UgdMineralComponent),
    title: 'UGD Mineral Project - ResolVR Case Study'
  },
  { 
    path: 'our-work/piano-school', 
    loadComponent: () => import('./pages/projects/piano-school/piano-school.component').then(c => c.PianoSchoolComponent),
    title: 'Piano School Case Study - ResolVR Projects'
  },
  { 
    path: 'our-work/city-gym', 
    loadComponent: () => import('./pages/projects/city-gym/city-gym.component').then(c => c.CityGymComponent),
    title: 'City Gym Project - ResolVR Case Study'
  },
  { 
    path: 'our-work/iskratel', 
    loadComponent: () => import('./pages/projects/iskratel/iskratel.component').then(c => c.IskratelComponent),
    title: 'Iskratel Case Study - ResolVR Enterprise Solutions'
  },
  { 
    path: 'our-work/kontron', 
    loadComponent: () => import('./pages/projects/kontron/kontron.component').then(c => c.KontronComponent),
    title: 'Kontron Case Study - ResolVR Enterprise Solutions'
  },
  { 
    path: 'our-work/rimaterm', 
    loadComponent: () => import('./pages/projects/rima-term/rima-term.component').then(c => c.RimaTermComponent),
    title: 'RimaTerm Project - ResolVR Case Study'
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/privacy/privacy.component').then(c => c.PrivacyComponent),
    title: 'Privacy Policy - ResolVR'
  }
];
