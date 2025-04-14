import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy{
nombre: string | null = localStorage.getItem('nombre');

  constructor(){
    window.addEventListener('beforeunload', this.clearLocalStorage);
  }

  clearLocalStorage = () => {
    localStorage.removeItem('nombre');
  };

  ngOnDestroy(): void {
   
    window.removeEventListener('beforeunload', this.clearLocalStorage);
  }
}
