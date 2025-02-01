import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // Make sure RouterModule is imported here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  menuOpen = false;
  dropdownOpen = false;
  activeSection: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events to update the active section and close menus on navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        if (url.startsWith('/home')) {
          this.activeSection = 'home';
        } else if (url.startsWith('/about')) {
          this.activeSection = 'about';
        } else if (url.startsWith('/services')) {
          this.activeSection = 'services';
        } else if (url.startsWith('/careers')) {
          this.activeSection = 'careers';
        } else if (url.startsWith('/contact-us')) {
          this.activeSection = 'contact';
        } else {
          this.activeSection = '';
        }
        // Close the mobile menu and dropdown (if open) on navigation
        this.menuOpen = false;
        this.dropdownOpen = false;
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  /**
   * Toggles the mobile dropdown for the "Services" menu.
   * On mobile devices (width ≤ 768px) the click event is prevented
   * from navigating immediately so that the dropdown can be expanded.
   */
  toggleDropdown(event?: Event): void {
    if (window.innerWidth <= 768) {
      if (event) {
        event.preventDefault();
      }
      this.dropdownOpen = !this.dropdownOpen;
    }
  }
}
