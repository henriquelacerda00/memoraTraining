import { UtilsService } from './services/utils.service';
import { PrimengModule } from '../../../core/PrimeModule';
import { DROP_DOWN_ITEMS } from './data/drop-down-items.data';
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { DropDownItemComponent } from './drop-down-item/drop-down-item.component';
@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [PrimengModule, DropDownItemComponent],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.scss',
})
export class DropDownComponent {
  constructor(private renderer: Renderer2, private utilsService: UtilsService, private _el: ElementRef) {}
  @ViewChild('avatarRef', { read: ElementRef })
  avatarRef!: ElementRef<HTMLDivElement>;

  dropDownItems = DROP_DOWN_ITEMS;
  isDropdownOpen = false;

  // Detecta o clique fora do componente para adicionar a funcionalidade de fechar o dropdown ao clicar fora dele
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this._el.nativeElement.contains(event.target)) {
      this.toggleDropdown('clickOutside');
    }
  }

  toggleDropdown(caller: 'avatar' | 'clickOutside') {
    // Verifica se o toggle foi chamado pelo clique no avatar ou por clique fora do componente
    if (caller === 'avatar') {
      this.isDropdownOpen = !this.isDropdownOpen;
    }

    if (caller === 'clickOutside') {
      this.isDropdownOpen = false;
    }

    const avatarEl: HTMLElement = this.avatarRef.nativeElement.firstChild as HTMLElement;
    this.utilsService.changeStyle(this.isDropdownOpen, avatarEl, this.renderer);
  }
}
