import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isScrolled = false;
  menuOpen = false;
  activeSection: string = 'home';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    const sections = ['home', 'about', 'services', 'careers'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    const navLinks = document.querySelector('.nav-links');
    if (this.menuOpen) {
      navLinks?.classList.add('active');
    } else {
      navLinks?.classList.remove('active');
    }
  }
}
