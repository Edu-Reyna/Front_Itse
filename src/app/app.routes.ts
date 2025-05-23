import { Routes } from '@angular/router';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ResultadoBusquedaComponent } from './pages/resultado-busqueda/resultado-busqueda.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'ayuda', component: AyudaComponent},
    {path: '', component: InicioSesionComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'resultado', component: ResultadoBusquedaComponent}
];
