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
  public title: string = 'PoliChess';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbarPrincipal = document.getElementById("navbar-principal");
    const logoNavbar = document.getElementById("logo-navbar");
    if(window.scrollY > 0) {
      navbarPrincipal?.classList.remove("transparente");
      logoNavbar?.classList.remove("no-achicado");
      logoNavbar?.classList.add("achicado");
    } else {
      navbarPrincipal?.classList.add("transparente");
      logoNavbar?.classList.remove("achicado");
      logoNavbar?.classList.add("no-achicado");
    }
  }
}