import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../core/PrimeModule';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { asideData } from './data/aside-nav.data';

@Component({
  selector: 'app-aside-nav',
  standalone: true,
  imports: [TieredMenuModule],
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.scss',
})
export class AsideNavComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = asideData;
  }
}
