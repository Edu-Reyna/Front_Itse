import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-resultado-busqueda',
  imports: [RouterLink, ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './resultado-busqueda.component.html',
  styleUrl: './resultado-busqueda.component.css'
})
export class ResultadoBusquedaComponent implements AfterViewInit, OnInit {

  filtroForm: FormGroup;
  tipoSalon: FormControl;
  piso: FormControl;


  constructor(private router: Router, private fb: FormBuilder) { 
    this.tipoSalon = new FormControl('');
    this.piso = new FormControl('');

    this.filtroForm = new FormGroup({
      tipoSalon: this.tipoSalon, 
      piso: this.piso 
    });
  }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const edificio = navigation?.extras.state?.['edificio'];
    console.log(edificio);
  }
  
  aplicarFiltros(): void {
    console.log(this.filtroForm.value);
  }

  onRadioChange(event: any, formControlName: string) {
    const value = event.target.value;
    this.filtroForm.get(formControlName)?.setValue(value); // Asigna un string
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
}
