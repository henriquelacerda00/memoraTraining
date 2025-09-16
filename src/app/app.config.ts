// src/main.ts ou app.config.ts
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { routes } from './app.routes';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './core/auth.interceptor';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MessageService } from 'primeng/api';

// Registrar locale brasileiro
registerLocaleData(localePt, 'pt-BR');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
    provideClientHydration(),
    provideHttpClient(),
    provideAnimations(),

    // Locale brasileiro
    { provide: LOCALE_ID, useValue: 'pt-BR' },

    // Interceptor de autenticação
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

      MessageService  
    ],
};
