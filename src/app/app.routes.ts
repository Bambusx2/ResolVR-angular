import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CustomSoftwareDevelopmentComponent } from './pages/services/custom-software-development/custom-software-development.component';
import { TeamAugmentationComponent } from './pages/services/team-augmentation/team-augmentation.component';
import { ProductImprovementComponent } from './pages/services/product-improvement/product-improvement.component';
import { SmartIotSolutionsComponent } from './pages/services/smart-iot-solutions/smart-iot-solutions.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/custom-software-development', component: CustomSoftwareDevelopmentComponent },
  { path: 'services/team-augmentation', component: TeamAugmentationComponent },
  { path: 'services/product-improvement', component: ProductImprovementComponent },
  { path: 'services/smart-iot-solutions', component: SmartIotSolutionsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact-us', component: ContactUsComponent },
];
