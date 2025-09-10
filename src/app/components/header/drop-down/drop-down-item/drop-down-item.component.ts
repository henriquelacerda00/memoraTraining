import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drop-down-item',
  standalone: true,
  imports: [],
  templateUrl: './drop-down-item.component.html',
  styleUrl: './drop-down-item.component.scss',
})
export class DropDownItemComponent {
  constructor(private router: Router) {}
  @Input({ required: true }) item!: {
    label: string;
    icon: string;
    route: string;
  };

  @Output() itemClicked = new EventEmitter<void>();

  navigate = () => {
    this.itemClicked.emit();
    this.router.navigate([this.item.route]);
  };
}
