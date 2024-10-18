import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public achicado: boolean;
  public transparente: boolean;

  constructor() {
    this.achicado = false;
    this.transparente = true;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbarPrincipal = document.getElementById("navbar-principal");
    const logoNavbar = document.getElementById("logo-navbar");
    if(window.scrollY > 0) {
      this.achicado = true;
      this.transparente = false;
    } else {
      this.achicado = false;
      this.transparente = true;
    }
  }
}