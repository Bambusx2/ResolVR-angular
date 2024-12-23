import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAutoplayVideo]'
})
export class AutoplayVideoDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const video: HTMLVideoElement = this.el.nativeElement;

    // Ensure the video is loaded before attempting playback
    if (video.readyState >= 2) {
      this.tryPlayVideo(video);
    } else {
      video.onloadeddata = () => this.tryPlayVideo(video);
    }

    // Add global interaction listeners for fallback
    const interactionHandler = () => {
      this.tryPlayVideo(video);
      this.removeListeners(interactionHandler);
    };

    this.addListeners(interactionHandler);
  }

  private tryPlayVideo(video: HTMLVideoElement): void {
    video.play().then(() => {
      console.log('Video playback started successfully.');
    }).catch((error) => {
      console.error('Autoplay blocked or failed:', error);
    });
  }

  private addListeners(handler: () => void): void {
    this.renderer.listen('document', 'click', handler);
    this.renderer.listen('document', 'keydown', handler); // Handles keyboard events
    this.renderer.listen('document', 'touchstart', handler); // Handles touch on mobile
  }

  private removeListeners(handler: () => void): void {
    document.removeEventListener('click', handler);
    document.removeEventListener('keydown', handler);
    document.removeEventListener('touchstart', handler);
  }
}
