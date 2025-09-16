import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-drop-down-item',
  standalone: true,
  imports: [],
  templateUrl: './drop-down-item.component.html',
  styleUrls: ['./drop-down-item.component.scss'],
})
export class DropDownItemComponent {
  constructor(private router: Router, private authService: AuthService) { }
  @Input({ required: true }) item!: {
    label: string;
    icon: string;
    route: string;
  };
  @Input() isLogout: boolean = false;
  @Output() itemClicked = new EventEmitter<void>();

  navigate = () => {
    this.itemClicked.emit();

    if (this.isLogout === true) {
      this.logout();
    } else {
      this.router.navigate([this.item.route]);
    }

  };

  logout() {
    this.authService.logout();
    // Navega para login
    this.router.navigate(['/login']);
  }
}
