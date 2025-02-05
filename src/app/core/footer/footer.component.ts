import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}

  navigateToContact() {
    this.router.navigate(['/contact-us']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
