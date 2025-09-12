// animations.module.ts
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, style, transition, animate } from '@angular/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    BrowserAnimationsModule
  ]
})
export class AnimationsModule {}

// Opcional: você pode exportar triggers prontos aqui ou criar um arquivo separado
export const fadeSlide = trigger('fadeSlide', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-5px)' }),
    animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-5px)' }))
  ])
]);
