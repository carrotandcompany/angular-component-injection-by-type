import { Component, Input } from '@angular/core';
import { BaseCardComponent } from '../types';

export interface CardAData {
  text: string;
  color: string;
}

@Component({
  template: `
    <mat-card [ngStyle]="{backgroundColor:data?.color}">
      <div>{{data?.text}}</div>
    </mat-card>`
})
export class CardAComponent implements BaseCardComponent<CardAData> {
  @Input() data: CardAData | undefined;
}
