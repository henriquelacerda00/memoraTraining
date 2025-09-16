import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private messageService: MessageService) { }

  showSuccess(detail: string, summary: string = 'Sucesso') {
    this.messageService.add({ severity: 'success', summary: summary, detail: detail });
  }

  showInfo(detail: string, summary: string = 'Informação') {
    this.messageService.add({ severity: 'info', summary: summary, detail: detail });
  }

  showWarn(detail: string, summary: string = 'Atenção') {
    this.messageService.add({ severity: 'warn', summary: summary, detail: detail });
  }

  showError(detail: string, summary: string = 'Erro') {
    this.messageService.add({ severity: 'error', summary: summary, detail: detail });
  }
}
