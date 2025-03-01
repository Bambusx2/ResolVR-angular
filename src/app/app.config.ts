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

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withPreloading(SelectivePreloadingStrategy),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    ),
    provideAnimations(),
    // Removed provideClientHydration() as we're not using SSR
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
    Meta,
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
};
