import { Component, Input } from '@angular/core';
import { BaseCardComponent } from '../types';


export interface CardBData {
  button: string;
  color: string;
}

@Component({
  template: `
    <mat-card [ngStyle]="{backgroundColor:data?.color}">
      <button mat-raised-button>{{data?.button}}</button>
    </mat-card>`,
  styles: [`
    button {
      width: 100%;
    }
  `]
})
export class CardBComponent implements BaseCardComponent<CardBData> {
  @Input() data: CardBData | undefined;
}
