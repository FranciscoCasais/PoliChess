import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.achicado = false;
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.onWindowScroll();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if(isPlatformBrowser(this.platformId)) {
      const navbarPrincipal = document.getElementById("navbar-principal");
      const logoNavbar = document.getElementById("logo-navbar");
      if(window.scrollY > 0) {
        this.achicado = true;
      } else {
        this.achicado = false;
      }
    }
  }
}