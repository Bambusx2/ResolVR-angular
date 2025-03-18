import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withPreloading } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
// Removing provideClientHydration since we don't need server-side rendering
import { Title, Meta } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';
import { IMAGE_CONFIG } from '@angular/common';

import { routes } from './app.routes';
import { SelectivePreloadingStrategy } from './core/strategies/selective-preloading-strategy';

// Create the base providers array without service worker
const baseProviders = [
  provideRouter(
    routes,
    withPreloading(SelectivePreloadingStrategy),
    withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
  ),
  provideAnimations(),
  provideHttpClient(
    withInterceptorsFromDi(),
    withJsonpSupport()
  ),
  // Suppress image size warnings to maintain original design
  {
    provide: IMAGE_CONFIG,
    useValue: {
      disableImageSizeWarning: true,
      disableImageLazyLoadWarning: true
    }
  },
  Title,
  Meta
];

// Only add service worker in production
if (!isDevMode()) {
  console.log('Enabling service worker for production');
  baseProviders.push(
    provideServiceWorker('ngsw-worker.js', {
      enabled: true,
      registrationStrategy: 'registerWhenStable:30000'
    })
  );
} else {
  console.log('Service worker disabled in development mode');
}

// Export the application configuration
export const appConfig: ApplicationConfig = {
  providers: baseProviders
};
