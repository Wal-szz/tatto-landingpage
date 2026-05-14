/*
 * COMPONENTE GALLERY
 *
 * Muestra una cuadrícula (grid) de trabajos del estudio.
 *
 * Aquí usamos una INTERFAZ TypeScript para definir la forma de los datos
 * (qué propiedades tiene cada ítem de la galería). Esto añade tipado estático
 * y evita errores en tiempo de desarrollo.
 */
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage, IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';

/* Interfaz: define la "forma" de un objeto GalleryItem */
interface GalleryItem {
  id: number;
  title: string;    // Nombre del estilo
  category: string; // Categoría visible al usuario
  src: string;      // URL de la imagen
  alt: string;      // Texto alternativo accesible
}

@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // Loader de paso directo: NgOptimizedImage usa la URL tal cual
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) =>
        config.width ? `${config.src}&w=${config.width}` : config.src,
    },
  ],
})
export class GalleryComponent {
  readonly items = signal<GalleryItem[]>([
    {
      id: 1,
      title: 'Manga Japonesa',
      category: 'Sleeve / Japonés',
      // unsplash.com/photos/man-with-fully-tattooed-arms-against-black-background-kppyUThcnmE
      // Foto real: hombre con brazo completamente tatuado estilo japonés sobre fondo negro
      src: 'https://images.unsplash.com/photo-1759247943688-5d47a84dd615?q=80&auto=format&fit=crop',
      alt: 'Manga completa de tatuaje japonés en brazo sobre fondo negro',
    },
    {
      id: 2,
      title: 'Ala Negra',
      category: 'Blackwork',
      // unsplash.com/photos/black-wing-arm-tattoo-81KkekLWK2U
      // Foto real: tatuaje de ala negra en brazo
      src: 'https://images.unsplash.com/photo-1573842322599-5c284a2860ec?q=80&auto=format&fit=crop',
      alt: 'Tatuaje de ala negra en el brazo',
    },
    {
      id: 3,
      title: 'Flores en la Mano',
      category: 'Floral',
      // unsplash.com/photos/floral-hand-tattoo-17Ko8URqLyQ
      // Foto real: tatuaje floral en la mano
      src: 'https://images.unsplash.com/photo-1565368113202-ffa5bffb6feb?q=80&auto=format&fit=crop',
      alt: 'Tatuaje floral en la mano',
    },
    {
      id: 4,
      title: 'Dragón en la Espalda',
      category: 'Dragón',
      // unsplash.com/photos/woman-with-black-and-red-dragon-tattoo-on-back-njy7C0TW7xk
      // Foto real: dragón negro y rojo en la espalda
      src: 'https://images.unsplash.com/photo-1582852629325-5744d21d5ae8?q=80&auto=format&fit=crop',
      alt: 'Tatuaje de dragón negro y rojo en la espalda',
    },
    {
      id: 5,
      title: 'Mandala en la Mano',
      category: 'Mandala',
      // unsplash.com/photos/persons-mandala-tattoo-pGoITI0Xo7Q
      // Foto real: mandala tatuado en la palma de la mano
      src: 'https://images.unsplash.com/photo-1564809391512-91833191326b?q=80&auto=format&fit=crop',
      alt: 'Tatuaje de mandala en la palma de la mano',
    },
    {
      id: 6,
      title: 'Mariposa en la Muñeca',
      category: 'Fine Line',
      // unsplash.com/photos/a-butterfly-tattoo-adorns-a-wrist-QFV8JV3m6Zk
      // Foto real: mariposa de colores en la muñeca, estilo fino
      src: 'https://images.unsplash.com/photo-1752303166259-c15544181efd?q=80&auto=format&fit=crop',
      alt: 'Tatuaje de mariposa de colores en la muñeca',
    },
  ]);
}
