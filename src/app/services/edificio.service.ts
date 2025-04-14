import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import edificio from '../models/edificio';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {
  
  ESCUELA_URL = 'http://localhost:3000/ITSE/Escuelas';

  constructor(private http: HttpClient) { }

  getEdificios() {
    return this.http.get<edificio[]>(this.ESCUELA_URL);
  }

  getEdificiosParams(num_lugar: string, tipo_lugar: string, num_piso: string) {
    const searchParams = new URLSearchParams();
    if (num_lugar) searchParams.append('num_lugar', num_lugar);
    if (tipo_lugar) searchParams.append('tipo_lugar', tipo_lugar);
    if (num_piso) searchParams.append('num_piso', num_piso);

    return this.http.get<edificio[]>(`${this.ESCUELA_URL}?${searchParams.toString() ? `${searchParams}` : ''}`);
  }

  mandarEdificio(edificio: edificio) {
    localStorage.setItem('edificio', JSON.stringify(edificio));
  }

  obtenerEdificio() {
    return JSON.parse(localStorage.getItem('edificio') || '{}');
  }
}
