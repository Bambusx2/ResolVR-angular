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
  activeSection: string = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    const sections = ['home', 'about', 'services', 'careers'];
    let found = false;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          this.activeSection = section;
          found = true;
          break;
        }
      }
    }

    // Ensure "Services" is active if any sub-service page is open
    if (!found && window.location.pathname.includes('/services')) {
      this.activeSection = 'services';
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    const navLinks = document.querySelector('.menu-container');
    if (this.menuOpen) {
      navLinks?.classList.add('active');
    } else {
      navLinks?.classList.remove('active');
    }
  }
}
