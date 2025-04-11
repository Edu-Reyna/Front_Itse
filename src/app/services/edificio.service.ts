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
}
