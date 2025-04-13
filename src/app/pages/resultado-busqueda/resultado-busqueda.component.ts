import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EdificioService } from '../../services/edificio.service';
import edificio from '../../models/edificio';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-resultado-busqueda',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './resultado-busqueda.component.html',
  styleUrl: './resultado-busqueda.component.css'
})
export class ResultadoBusquedaComponent implements AfterViewInit, OnInit {

  edificios: edificio[] = [];
  edificio : edificio | undefined;
  filtroForm: FormGroup;
  inputValue: FormControl;
  tipoSalon: FormControl;
  piso: FormControl;


  constructor(private router: Router, public edificioService: EdificioService, private sanitizer: DomSanitizer) {
    this.inputValue = new FormControl('');
    this.tipoSalon = new FormControl('', [Validators.required]);
    this.piso = new FormControl('', [Validators.required]);

    this.filtroForm = new FormGroup({
      inputValue: this.inputValue,
      tipoSalon: this.tipoSalon, 
      piso: this.piso 
    });
  }

  ngOnInit(): void {
    this.edificio = this.edificioService.obtenerEdificio();  
  }
  

  getEdificios() {
    this.edificioService.getEdificiosParams(this.filtroForm.value.inputValue, this.filtroForm.value.tipoSalon, this.filtroForm.value.piso).subscribe({
      next: (data) => {
        this.edificios = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngAfterViewInit(): void {
    const filterBtn = document.getElementById('filterBtn');
    const filterDropdown = document.getElementById('filterDropdown');
    const applyButton = document.querySelector('.apply-button');

    if (filterBtn && filterDropdown) {
      filterBtn.addEventListener('click', () => {
        filterDropdown.classList.toggle('show');
      });

      window.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLElement;
        if (
          !target.matches('.filter-button') &&
          !target.matches('.fa-bars') &&
          !filterDropdown.contains(target)
        ) {
          if (filterDropdown.classList.contains('show')) {
            filterDropdown.classList.remove('show');
          }
        }
      });
    }

    if (applyButton && filterDropdown) {
      applyButton.addEventListener('click', () => {
        // Aquí puedes añadir la lógica para aplicar los filtros
        filterDropdown.classList.remove('show');
      });
    }
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
