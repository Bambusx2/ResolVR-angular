import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";
import { ParticlesComponent } from './shared/particles/particles/particles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, ParticlesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resolvr';
  isScrolled = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
