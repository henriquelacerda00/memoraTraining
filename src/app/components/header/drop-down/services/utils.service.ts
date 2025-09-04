import { Injectable, Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  changeStyle = (isDropdownOpen: boolean, avatarEl: HTMLElement, renderer: Renderer2) => {
    renderer.setStyle(avatarEl, 'backgroundColor', isDropdownOpen ? 'red' : '');
    renderer.setStyle(avatarEl, 'color', isDropdownOpen ? 'white' : '');
  };
}
