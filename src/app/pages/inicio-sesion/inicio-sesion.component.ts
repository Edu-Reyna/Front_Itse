import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  imports: [ HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent implements AfterViewInit{
  form: FormGroup;
  nombre: FormControl;
  constructor(private router: Router) {
    this.nombre = new FormControl('');
    this.form = new FormGroup({
      nombre: this.nombre
    });
   }

   OnSubmit() {
    this.nombre.setValue(this.form.value.nombre);
    localStorage.setItem('nombre', this.nombre.value);
    this.router.navigate(['/home']);
   }

  ngAfterViewInit(): void {
    const userIcon = document.getElementById('user-icon');
    const menu = document.getElementById('menu-usuario');

    if (userIcon && menu) {
      userIcon.addEventListener('click', () => {
        menu.classList.toggle('mostrar');
      });

      window.addEventListener('click', (e: Event) => {
        if (
          e.target instanceof Node &&
          !userIcon.contains(e.target) &&
          !menu.contains(e.target)
        ) {
          menu.classList.remove('mostrar');
        }
      });
    }
  }
}
