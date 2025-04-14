import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EdificioService } from '../../services/edificio.service';
import edificio from '../../models/edificio';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  edificios: edificio[] = [];
  inputValue: string = '';
  edificioEncontrado: edificio[] | null = null;

  constructor(public edificioService: EdificioService, private router: Router ) {}

  ngOnInit(): void {
    this.getEdificios();
  }

  getEdificios() {
    return this.edificioService.getEdificios().subscribe({
      next: (data) => {
        this.edificios = data;
        console.log(this.edificios);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  obtenerEdificio(value: string): void {

    if (!value) {
      this.edificioEncontrado = null;
      return;
    }

    const resultados = this.edificios.filter(edificio => 
      edificio.lugar.num_lugar.includes(value)
    );
  
    this.edificioEncontrado = resultados.length > 0 ? resultados : null;

  }

  verDetalles(edificio: edificio): void {
    this.router.navigate(['/resultado'], { state: { edificio } });
    console.log(edificio);
  }

  ngAfterViewInit(): void {
    const userIcon = document.getElementById('user-icon');
    const menu = document.getElementById('menu-usuario');

    if (userIcon && menu) {
      userIcon.addEventListener('click', () => {
        menu.classList.toggle('mostrar');
      });

      window.addEventListener('click', (e: Event) => {
        // Comprobar que e.target es un Node antes de usar contains.
        if (e.target instanceof Node && 
            !userIcon.contains(e.target) && 
            !menu.contains(e.target)) {
          menu.classList.remove('mostrar');
        }
      });
    }
  }
}
