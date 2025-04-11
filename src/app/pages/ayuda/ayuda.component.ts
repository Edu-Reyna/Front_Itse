import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ayuda',
  imports: [RouterLink],
  templateUrl: './ayuda.component.html',
  styleUrl: './ayuda.component.css'
})
export class AyudaComponent {

  ngAfterViewInit(): void {
    const userIcon = document.getElementById('user-icon');
    const menu = document.getElementById('menu-usuario');

    // Verificamos que los elementos existan para evitar errores
    if (userIcon && menu) {
      userIcon.addEventListener('click', () => {
        menu.classList.toggle('mostrar');
      });

      window.addEventListener('click', (e: Event) => {
        // Comprobamos que e.target es un Node para evitar errores
        if (e.target instanceof Node &&
            !userIcon.contains(e.target) && 
            !menu.contains(e.target)) {
          menu.classList.remove('mostrar');
        }
      });
    }
  }
}