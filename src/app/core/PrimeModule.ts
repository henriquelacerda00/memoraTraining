import { NgModule } from '@angular/core';

// Import dos componentes PrimeNG que você usa
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';



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
    DividerModule
    // aqui também adicione outros módulos
  ]
})
export class PrimengModule { }