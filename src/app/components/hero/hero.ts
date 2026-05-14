/*
 * COMPONENTE HERO
 *
 * La sección "hero" es el primer bloque visual de la página.
 * Su objetivo es capturar la atención del usuario inmediatamente.
 *
 * Este componente no tiene estado propio (es puramente presentacional),
 * por eso su clase está casi vacía.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
