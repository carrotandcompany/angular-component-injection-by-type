import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { COMPONENT_MAP } from './component-registry';
import { CompHostDirective } from './comp-host.directive';
import { CardAComponent } from './cards/card-a.component';
import { CardBComponent } from './cards/card-b.component';
import { CardCComponent } from './cards/card-c.component';

// define the mapping of string id's to components
const componentMap = [
  {
    id: 'card-a', // this ID is matched against the FAKE_SERVER_DATA to retrieve the right component
    component: CardAComponent
  },
  {
    id: 'card-b',
    component: CardBComponent
  },
  {
    id: 'card-c',
    component: CardCComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    CompHostDirective,
    CardAComponent,
    CardBComponent,
    CardCComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
  ],
  providers: [
    {provide: COMPONENT_MAP, useValue: componentMap}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
