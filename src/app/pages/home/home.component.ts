import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { HttpClientModule } from '@angular/common/http';
import { CarrosselComponent } from '../../components/carrossel/carrossel.component';
import { AsideNavComponent } from '../../components/aside-nav/aside-nav.component';
import { VoucherCarouselComponent } from '../../components/voucher-carousel/voucher-carousel.component';
import { FormsModule } from '@angular/forms';
import { CarrosselCategoryComponent } from "../../components/carrossel/carrossel-category/carrossel-category.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PrimengModule,
    HttpClientModule,
    CarrosselComponent,
    AsideNavComponent,
    VoucherCarouselComponent,
    FormsModule,
    CarrosselCategoryComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  value = 4.6;

  ngAfterViewInit() {
    const stars = this.elementRef.nativeElement.querySelectorAll('.p-rating-icon-active');

    if (this.value % 1 !== 0 && typeof document !== 'undefined') {
      const svgNS = 'http://www.w3.org/2000/svg';
      const gradient = document.createElementNS(svgNS, 'linearGradient');
      gradient.setAttribute('id', 'starPartialFill');
      gradient.setAttribute('x1', '0%');
      gradient.setAttribute('x2', '0%');
      gradient.setAttribute('y1', '100%');
      gradient.setAttribute('y2', '0%');

      // Define os stops do gradiente conforme a porcentagem
      const percent = this.value % 1; // ex: 0.3 para 3.3
      const stop1 = document.createElementNS(svgNS, 'stop');
      stop1.setAttribute('offset', `${percent * 100}%`);
      stop1.setAttribute('stop-color', 'gold');

      const stop2 = document.createElementNS(svgNS, 'stop');
      stop2.setAttribute('offset', `${percent * 100}%`);
      stop2.setAttribute('stop-color', 'white');

      gradient.appendChild(stop1);
      gradient.appendChild(stop2);

      // Adiciona o gradiente ao SVG
      const star = stars[stars.length - 1].children[0] as SVGElement;
      star.ownerSVGElement?.querySelector('defs')?.appendChild(gradient);

      const path = star.children[0] as SVGPathElement;

      path.classList.add('star-partial');

      // Aplica o gradiente como fill
      setTimeout(() => {
        path.setAttribute('fill', 'url(#starPartialFill)');
      }, 0);
    }
  }
}
