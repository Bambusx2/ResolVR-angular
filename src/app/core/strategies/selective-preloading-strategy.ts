import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

/**
 * A custom preloading strategy that selectively preloads modules based on data in the route
 */
@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preloadedModules: string[] = [];

  /**
   * Determines whether to preload a particular route based on the 'preload' data property
   * @param route The route to consider for preloading
   * @param load Function to call to load the module
   */
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data?.['preload'] && route.path) {
      // Add the route path to our preloaded modules array for debugging
      this.preloadedModules.push(route.path);
      
      // Log which module we're preloading
      // console.log(`Preloaded: ${route.path}`);
      
      // Call the load function to preload the module
      return load();
    } else {
      // Do not preload if the 'preload' data property is not set or is false
      return of(null);
    }
  }
}
