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

  isLoginVisible: boolean = false;
  isRegisterVisible: boolean = false;
  isOverlayVisible: boolean = false;

  openLogin(): void {
    this.isLoginVisible = true;
    this.isRegisterVisible = false;
    this.isOverlayVisible = true;
    console.log("Mostrando login");
  }

  showRegister(): void {
    console.log("Mostrando registro");
    this.isLoginVisible = false;
    this.isRegisterVisible = true;
  }
  
  showLogin(): void {
    console.log("Mostrando login");
    this.isLoginVisible = true;
    this.isRegisterVisible = false;
  }
  
  closeLogin(): void {
    this.isLoginVisible = false;
    this.isRegisterVisible = false;
    this.isOverlayVisible = false;
  }

  closeLoginOverlay(event: Event): void {
    // Verifica que el clic fue en el overlay y no dentro del popup
    if (event.target && (event.target as HTMLElement).classList.contains('login-overlay')) {
      this.closeLogin();
    }
  }
  

}