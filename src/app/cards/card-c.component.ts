import { Component, Input } from '@angular/core';
import { BaseCardComponent } from '../types';

export interface CardCData {
  color: string;
  input: string;
  label: string;
  placeholder: string;
}

@Component({
  template: `
    <mat-card [ngStyle]="{backgroundColor:data?.color}">
      <mat-form-field appearance="fill">
        <mat-label>{{data?.label}}</mat-label>
        <input matInput>
      </mat-form-field>
    </mat-card>`,
  styles: [`
    mat-form-field {
      width: 100%;
    }
  `]
})
export class CardCComponent implements BaseCardComponent<CardCData> {
  @Input() data: CardCData | undefined;
}
