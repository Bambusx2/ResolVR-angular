import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from "../services/services.component";


@Component({
  selector: 'app-home',
  imports: [AboutComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {
  
}