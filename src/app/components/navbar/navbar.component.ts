import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  get navbarClass(): string {
     const currentRoute = this.router.url;
     switch (currentRoute) {
       case '/':
         return 'text-white';
       case '/centro':
         return 'text-[#616c4c] font-semibold fill-current bg-[url("/assets/banner.jpg")] bg-center bg-auto mt-0';
         case '/beneficios':
         return 'text-[#616c4c] font-semibold fill-current bg-[url("/assets/banner.jpg")] bg-center bg-auto mt-0';
         case '/novedades':
          return 'text-[#616c4c] font-semibold fill-current bg-[url("/assets/banner.jpg")] bg-center bg-auto mt-0';
          case '/participa':
            return 'text-[#616c4c] font-semibold fill-current bg-[url("/assets/banner.jpg")] bg-center bg-auto mt-0';
            case '/contacto':
              return 'text-[#616c4c] font-semibold fill-current bg-[url("/assets/banner.jpg")] bg-center bg-auto mt-0';
         default:
         return 'text-white';
     }
  }
}
