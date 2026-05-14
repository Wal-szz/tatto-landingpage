/*
 * COMPONENTE RAÍZ — app.ts
 *
 * Este es el componente de entrada de la aplicación Angular.
 * Angular lo usa como punto de partida para renderizar todo lo demás.
 *
 * Su template (app.html) simplemente compone todos los componentes
 * de la landing page en orden.
 *
 * imports: lista cada componente que este template va a usar.
 * Sin importarlo aquí, Angular no reconocería <app-navbar>, etc.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NavbarComponent }  from './components/navbar/navbar';
import { HeroComponent }    from './components/hero/hero';
import { GalleryComponent } from './components/gallery/gallery';
import { TeamComponent }    from './components/team/team';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent }  from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    GalleryComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
