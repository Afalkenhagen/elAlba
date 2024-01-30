import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CentroComponent } from './pages/centro/centro.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ParticipaComponent } from './pages/participa/participa.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "nav", component: NavbarComponent},
    {path: "footer", component: FooterComponent},
    {path: "centro", component: CentroComponent},
    {path: "beneficios", component: BeneficiosComponent},
    {path: "novedades", component: NovedadesComponent},
    {path: "participa", component: ParticipaComponent},
    {path: "contacto", component: ContactoComponent},
];
