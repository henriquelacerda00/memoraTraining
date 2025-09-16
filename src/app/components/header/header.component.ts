import { Component } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { DropDownComponent } from './drop-down/drop-down.component';
import { NotificationService } from '../../core/notification.service';
import { TokenService } from '../../autenticacao/token/token.service';
import { AuthService } from '../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimengModule, DropDownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private notificationService: NotificationService, 
    private tokenService : TokenService , 
    private authService: AuthService
  ){

  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }


}
