import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "nav", component: NavbarComponent},
    {path: "footer", component: FooterComponent}
];
