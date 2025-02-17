import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-augmentation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-augmentation.component.html',
  styleUrls: ['./team-augmentation.component.css']
})
export class TeamAugmentationComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.initSEO();
  }

  private initSEO() {
    this.title.setTitle('Elite Nearshore Team Augmentation & Staff Augmentation Services | ResolVR');
    
    this.meta.addTags([
      { name: 'description', content: 'Scale your development team with top-tier nearshore developers. Expert staff augmentation services with pre-vetted senior engineers from Macedonia.' },
      { name: 'keywords', content: 'team augmentation, staff augmentation, nearshore developers, hire developers, development team, Macedonia developers, IT staffing, remote developers' },
      { property: 'og:title', content: 'Elite Nearshore Team Augmentation & Staff Augmentation Services | ResolVR' },
      { property: 'og:description', content: 'Scale your development team with top-tier nearshore developers. Expert staff augmentation services with pre-vetted senior engineers from Macedonia.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://resolvr.com/services/team-augmentation' },
      { property: 'og:image', content: 'https://resolvr.com/assets/images/team-augmentation.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@resolvr' },
      { name: 'twitter:creator', content: '@resolvr' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'ResolVR' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://resolvr.com/services/team-augmentation' },
      { name: 'article:published_time', content: new Date().toISOString() },
      { name: 'article:author', content: 'ResolVR' },
      { name: 'article:section', content: 'Services' }
    ]);
  }
}
