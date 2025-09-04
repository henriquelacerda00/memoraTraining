import { Injectable, Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  changeStyle = (
    isDropdownOpen: boolean,
    avatarRef: ElementRef<HTMLDivElement>,
    renderer: Renderer2
  ) => {
    const avatar: HTMLDivElement = avatarRef.nativeElement.firstChild as HTMLDivElement;

    renderer.setStyle(avatar, 'backgroundColor', isDropdownOpen ? 'red' : '');
    renderer.setStyle(avatar, 'color', isDropdownOpen ? 'white' : '');
  };
}
