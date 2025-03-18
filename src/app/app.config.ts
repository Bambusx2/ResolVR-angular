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

// Handle service worker registration - this needs to be in production build
if (!isDevMode()) {
  try {
    // Check if the browser supports service workers before adding
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
      console.log('Enabling service worker for production');
      baseProviders.push(
        provideServiceWorker('ngsw-worker.js', {
          enabled: true,
          registrationStrategy: 'registerImmediately'
        })
      );
      
      // Add error handling for registration failures
      if (typeof window !== 'undefined') {
        window.addEventListener('load', () => {
          navigator.serviceWorker.getRegistration().then(registration => {
            if (!registration) {
              console.warn('Service worker not registered, PWA functionality may be limited');
            }
          }).catch(err => {
            console.error('Service worker check failed:', err);
          });
        });
      }
    } else {
      console.log('Service workers not supported in this browser');
    }
  } catch (e) {
    console.warn('Error setting up service worker:', e);
  }
} else {
  console.log('Service worker disabled in development mode');
}

// Export the application configuration
export const appConfig: ApplicationConfig = {
  providers: baseProviders
};
