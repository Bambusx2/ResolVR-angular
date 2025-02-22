import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
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

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/product-development', component: ProductDevelopmentComponent },
  { path: 'services/team-augmentation', component: TeamAugmentationComponent },
  { path: 'services/product-improvement', component: ProductImprovementComponent },
  { path: 'services/smart-iot-solutions', component: SmartIotSolutionsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'our-work', component: OurWorkComponent },
  { path: 'our-work/hotel-park', component: HotelParkComponent },
  { path: 'our-work/gichev-trejd', component: GichevTrejdComponent },
  { path: 'our-work/ugd-mineral', component: UgdMineralComponent },
  { path: 'our-work/piano-school', component: PianoSchoolComponent },
  { path: 'our-work/city-gym', component: CityGymComponent },
  { path: 'our-work/iskratel', component: IskratelComponent },
  { path: 'our-work/kontron', component: KontronComponent },
  {
    path: 'privacy-policy',
    component: PrivacyComponent,
    title: 'Privacy Policy - ResolVR'
  }
];
