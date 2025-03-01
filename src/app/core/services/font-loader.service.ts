import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

/**
 * Service for efficiently loading and managing web fonts
 * Helps prevent layout shifts (CLS) caused by font loading
 */
@Injectable({
  providedIn: 'root'
})
export class FontLoaderService {
  private readonly fontLoadedSubject = new BehaviorSubject<boolean>(false);
  
  /**
   * Observable that emits true when custom fonts are loaded
   */
  public fontsLoaded$ = this.fontLoadedSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkFontLoading();
    } else {
      // For SSR, we assume fonts are loaded to avoid waiting
      this.fontLoadedSubject.next(true);
    }
  }

  /**
   * Check if fonts are loaded - but don't modify the font stack
   */
  private checkFontLoading(): void {
    // Use the Font Loading API if available
    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('1em Inter'),
        document.fonts.load('1em Poppins'),
        document.fonts.load('1em DesMontilles')
      ])
      .then(() => {
        // console.log('All fonts loaded successfully');
        this.fontLoadedSubject.next(true);
      })
      .catch(() => {
        // Use timeout as fallback
        setTimeout(() => {
          this.fontLoadedSubject.next(true);
        }, 2000);
      });
    } else {
      // After 2 seconds, we assume fonts are loaded to prevent indefinite waiting
      setTimeout(() => {
        this.fontLoadedSubject.next(true);
      }, 2000);
    }
  }
}
