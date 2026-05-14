/*
 * COMPONENTE TEAM
 *
 * Presenta a los artistas del estudio.
 * Igual que Gallery, los datos están en el componente pero en una app real
 * vendrían de una API o base de datos.
 */
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Artist {
  id: number;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  initials: string;    // Iniciales para el avatar SVG (sin imagen real)
  accentColor: string; // Color de acento para el avatar
}

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
  readonly artists = signal<Artist[]>([
    {
      id: 1,
      name: 'Valentina Cruz',
      role: 'Fundadora & Artista Principal',
      specialty: 'Realismo · Retratos',
      bio: 'Con 12 años de experiencia, Valentina transforma fotografías en tatuajes de precisión milimétrica. Especialista en retratos en blanco y negro.',
      initials: 'VC',
      accentColor: '#C9A84C',
    },
    {
      id: 2,
      name: 'Mateo Reyes',
      role: 'Artista Senior',
      specialty: 'Blackwork · Geometría',
      bio: 'Influenciado por el arte japonés y celta, Mateo crea composiciones geométricas que fluyen con la anatomía del cuerpo.',
      initials: 'MR',
      accentColor: '#8B6914',
    },
    {
      id: 3,
      name: 'Sofía Mendoza',
      role: 'Artista',
      specialty: 'Fine Line · Acuarela',
      bio: 'Su toque delicado y dominio del color la convierten en la artista perfecta para diseños florales y acuarelas con vida propia.',
      initials: 'SM',
      accentColor: '#A0834A',
    },
  ]);
}
