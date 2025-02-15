import { Component, OnInit } from '@angular/core';
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { IParticlesProps, NgParticlesService } from "@tsparticles/angular";
import { NgxParticlesModule } from "@tsparticles/angular";

@Component({
  selector: "app-particles",
  standalone: true,
  imports: [NgxParticlesModule],
  styleUrls: ["./particles.component.css"],
  template: `
    <!-- Default Particles -->
    <ngx-particles [id]="'defaultParticles'" [options]="defaultParticlesOptions"></ngx-particles>

    <!-- Slow Random Particles -->
    <ngx-particles [id]="'slowParticles'" [options]="slowParticlesOptions"></ngx-particles>

    <!-- Connected Dots -->
    <ngx-particles [id]="'connectedDots'" [options]="connectedDotsOptions"></ngx-particles>
  `
})
export class ParticlesComponent implements OnInit {

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      await loadSlim(engine);
    });
  }

  // Default moving particles
  defaultParticlesOptions: IParticlesProps = {
    fpsLimit: 120,
    interactivity: {
      events: { resize: { enable: true } },
    },
    particles: {
      color: { value: "#ffffff" },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: { default: OutMode.bounce },
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true }, value: 60 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  // Slow, random particles
  slowParticlesOptions: IParticlesProps = {
    fpsLimit: 60,
    particles: {
      color: { value: "#00ffcc" },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: { default: OutMode.out },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: { density: { enable: true }, value: 20 },
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 4 } },
    },
    detectRetina: true,
  };

  // Connected dots effect
  connectedDotsOptions: IParticlesProps = {
    fpsLimit: 120,
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: { default: OutMode.out },
        random: false,
        speed: 1,
        straight: false,
      },
      number: { density: { enable: true }, value: 30 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };
}
