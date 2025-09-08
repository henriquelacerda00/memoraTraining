import { NgModule } from '@angular/core';

// Import dos componentes PrimeNG que você usa
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselModule } from 'primeng/carousel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AvatarGroupModule } from 'primeng/avatargroup';

// adicione outros módulos conforme sua necessidade

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    CardModule,
    DropdownModule,
    ToastModule,
    ToolbarModule,
    SplitButtonModule,
    InputIconModule,
    IconFieldModule,
    DividerModule,
    FloatLabelModule,
    AvatarModule,
    AvatarGroupModule,
    CarouselModule,
    RatingModule,
    TieredMenuModule,
  ],
})
export class PrimengModule {}
