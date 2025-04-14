import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-inicio-sesion',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent implements AfterViewInit{

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
