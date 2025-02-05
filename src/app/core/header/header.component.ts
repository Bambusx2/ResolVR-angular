import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
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
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;

        // Determine the active section
        if (url.startsWith('/home')) {
          this.activeSection = 'home';
        } else if (url.startsWith('/about')) {
          this.activeSection = 'about';
        } else if (url.startsWith('/services')) {
          this.activeSection = 'services';

          // ✅ Keep dropdown open if inside a services subpage
          this.dropdownOpen = url !== '/services' && url !== '/services/';
        } else if (url.startsWith('/careers')) {
          this.activeSection = 'careers';
        } else if (url.startsWith('/contact-us')) {
          this.activeSection = 'contact';
        } else {
          this.activeSection = '';
        }

        // Close the menu when navigating (but not dropdown for services subpages)
        this.menuOpen = false;
      }
    });

    // ✅ Auto-expand dropdown when page loads (if inside /services/*)
    if (this.router.url.startsWith('/services') && this.router.url !== '/services') {
      this.dropdownOpen = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;

    // If opening the menu and inside a sub-section, keep "Services" dropdown open
    if (this.menuOpen && this.activeSection === 'services') {
      this.dropdownOpen = this.router.url !== '/services' && this.router.url !== '/services/';
    }
  }

  toggleDropdown(event: Event): void {
    if (window.innerWidth <= 768) { // Mobile only
      event.preventDefault(); // Prevent default link behavior on mobile

      if (!this.dropdownOpen) {
        // ✅ First click: Open dropdown instead of navigating
        this.dropdownOpen = true;
      } else {
        // ✅ Second click: Navigate to /services
        this.router.navigate(['/services']);
        this.menuOpen = false; // Close the mobile menu
        this.dropdownOpen = false; // Reset dropdown state
      }
    }
  }
}
