import { NgModule } from '@angular/core';

// Import dos componentes PrimeNG que você usa
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
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
    SplitButtonModule
    // aqui também adicione outros módulos
  ]
})
export class PrimengModule { }