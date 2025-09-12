import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, PrimengModule, FormsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  @Input({ required: true }) value: number = 0;
  @Input({ required: true }) count: number = 0;
  @Input() reviews: boolean = false;

  ngAfterViewInit() {
    setTimeout(() => {
      const stars = this.elementRef.nativeElement.getElementsByClassName('p-rating-icon-active');

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
        const gradId = `starPartialFill-${this.value}`;
        gradient.setAttribute('id', gradId);

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
        path.setAttribute('fill', `url(#${gradId})`);
      }
    }, 0);
  }
}
