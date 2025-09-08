import { Component } from '@angular/core';
import { AsideNavComponent } from '../../components/aside-nav/aside-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsideNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
