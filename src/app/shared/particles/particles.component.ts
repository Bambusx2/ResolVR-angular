import { Component } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';
import { MoveDirection, OutMode } from '@tsparticles/engine';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [NgxParticlesModule],
  template: `
    <ngx-particles
      [id]="'tsparticles'"
      [options]="particlesOptions"
      (particlesLoaded)="particlesLoaded($event)"
      (particlesInit)="particlesInit($event)">
    </ngx-particles>
  `,
})
export class ParticlesComponent {
  particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: OutMode.bounce,
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };
  

  particlesLoaded(event: unknown): void {
    console.log('Particles Loaded:', event);
  }

  async particlesInit(engine: any): Promise<void> {
    console.log('Particles Init:', engine);
    const { loadFull } = await import('tsparticles');
    await loadFull(engine);
  }
}
