import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { SwiperSliderComponent } from '../../components/swiper-slider/swiper-slider.component';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [FooterComponent, SwiperSliderComponent],
  templateUrl: './beneficios.component.html',
  styleUrl: './beneficios.component.scss'
})
export class BeneficiosComponent {

}
