/*
 * COMPONENTE NAVBAR
 *
 * Un componente Angular es una clase TypeScript decorada con @Component.
 * El decorador le dice a Angular qué HTML y estilos usar, y con qué
 * selector de HTML invocar este componente (ej: <app-navbar />).
 */
import {
  afterNextRender,        // Hook que corre UNA VEZ después del primer render en el navegador
  ChangeDetectionStrategy,
  Component,
  signal,                 // signal() crea un estado reactivo: cuando cambia, Angular actualiza el DOM
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  // imports: lista de otros componentes/módulos que necesita este template
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // Optimización: solo re-renderiza cuando cambia un signal
  host: { class: 'navbar-host' },
})
export class NavbarComponent {
  /*
   * signal() es la forma moderna de manejar estado en Angular.
   * - Para leer el valor: this.menuOpen()  (se llama como función)
   * - Para cambiarlo:     this.menuOpen.set(true)
   * - En el template:     menuOpen()
   */
  menuOpen = signal(false);

  /* true cuando el usuario ha hecho scroll hacia abajo */
  scrolled = signal(false);

  /* Lista de secciones de la página para el menú de navegación */
  readonly navLinks = [
    { label: 'Inicio',    href: '#hero' },
    { label: 'Galería',   href: '#gallery' },
    { label: 'Equipo',    href: '#team' },
    { label: 'Contacto',  href: '#contact' },
  ];

  constructor() {
    /*
     * afterNextRender() ejecuta código solo en el navegador (no en SSR/servidor).
     * Es el lugar correcto para añadir event listeners del DOM.
     * Equivale al "window is available" check, pero de forma Angular.
     */
    afterNextRender(() => {
      window.addEventListener('scroll', () => {
        this.scrolled.set(window.scrollY > 60);
      }, { passive: true }); // passive: true mejora el rendimiento del scroll
    });
  }

  toggleMenu(): void {
    this.menuOpen.update(open => !open); // update() recibe el valor actual y retorna el nuevo
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
