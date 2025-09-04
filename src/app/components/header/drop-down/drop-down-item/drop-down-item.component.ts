import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drop-down-item',
  standalone: true,
  imports: [],
  templateUrl: './drop-down-item.component.html',
  styleUrl: './drop-down-item.component.scss',
})
export class DropDownItemComponent {
  @Input({ required: true }) item!: {
    label: string;
    icon: string;
    route: string;
  };
}
