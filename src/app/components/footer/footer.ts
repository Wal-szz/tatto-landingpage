/*
 * COMPONENTE FOOTER
 *
 * Pie de página con logo, enlaces y redes sociales.
 * Componente puramente presentacional, sin lógica de negocio.
 *
 * computed() se usa para valores DERIVADOS de signals.
 * Aquí lo usamos para el año actual, aunque en este caso
 * también podría ser una propiedad normal ya que no depende
 * de ningún signal que cambie.
 */
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  /*
   * computed() crea un valor derivado que se recalcula automáticamente
   * cuando cambian los signals de los que depende.
   * Aquí no depende de otros signals, pero es la forma correcta de
   * evitar globals como "new Date()" directamente en el template.
   * (CLAUDE.md: "Do not assume globals like new Date() are available")
   */
  readonly currentYear = computed(() => new Date().getFullYear());

  readonly navLinks = [
    { label: 'Inicio',   href: '#hero' },
    { label: 'Galería',  href: '#gallery' },
    { label: 'Equipo',   href: '#team' },
    { label: 'Contacto', href: '#contact' },
  ];
}
