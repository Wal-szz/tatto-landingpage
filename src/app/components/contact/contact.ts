/*
 * COMPONENTE CONTACT
 *
 * Formulario de contacto usando REACTIVE FORMS de Angular.
 *
 * ¿Por qué Reactive Forms?
 * - Definimos la estructura y validaciones del formulario en TypeScript (no en el HTML)
 * - Tenemos control total sobre el estado del formulario
 * - Es más testeable y escalable que Template-driven forms
 *
 * Flujo:
 * 1. FormBuilder crea el formulario con sus campos y validadores
 * 2. El template se "conecta" al formulario con [formGroup] y formControlName
 * 3. Al enviar, onSubmit() verifica si el formulario es válido
 */
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  FormBuilder,         // Servicio helper para crear formularios fácilmente
  ReactiveFormsModule, // Módulo de Angular para usar formularios reactivos en el template
  Validators,          // Validadores predefinidos: required, email, minLength, etc.
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule], // Necesario para que [formGroup] y formControlName funcionen
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  /*
   * inject() es la forma moderna de inyectar dependencias en Angular.
   * Equivale al antiguo "constructor(private fb: FormBuilder)".
   * private = solo accesible dentro de esta clase.
   */
  private fb = inject(FormBuilder);

  /* Signal que indica si el formulario fue enviado exitosamente */
  submitted = signal(false);

  /*
   * FormGroup: representa el formulario completo.
   * Cada propiedad es un FormControl con su valor inicial y sus validadores.
   *
   * Validators.required → el campo no puede estar vacío
   * Validators.email    → el campo debe ser un email válido
   * Validators.minLength(n) → el campo debe tener al menos n caracteres
   */
  form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    style:   ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  /* Helper: acceso rápido a un control del formulario para leer su estado */
  field(name: string) {
    return this.form.get(name);
  }

  /* ¿Debe mostrarse el error de validación de este campo? */
  showError(name: string): boolean {
    const ctrl = this.field(name);
    // Solo mostramos error si el campo fue tocado (el usuario interactuó) Y es inválido
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  onSubmit(): void {
    if (this.form.valid) {
      /*
       * En una app real, aquí llamaríamos a un servicio HTTP:
       * this.contactService.send(this.form.value).subscribe(...)
       */
      this.submitted.set(true);
      this.form.reset(); // Limpia los valores del formulario
    } else {
      /*
       * markAllAsTouched() marca todos los campos como "tocados"
       * para que se muestren TODOS los errores de validación a la vez.
       */
      this.form.markAllAsTouched();
    }
  }
}
