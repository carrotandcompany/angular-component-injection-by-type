import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentRegistry } from './component-registry';
import { CompHostDirective } from './comp-host.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  FAKE_SERVER_DATA = [
    {
      '__typename': 'card-a',   // we use the __typename as ID for the component map
      'text': 'Card A Text',
      'color': 'aliceblue'
    },
    {
      '__typename': 'card-b',
      'button': 'Card B Button',
      'color': 'floralwhite'
    },
    {
      '__typename': 'card-c',
      'color': 'snow',
      'input': 'Card C',
      'label': 'Card C label',
      'placeholder': 'my placeholder'
    },
  ]

   @ViewChild(CompHostDirective, {static: true}) compHost!: CompHostDirective;

  constructor(private componentRegistry: ComponentRegistry) {
    this.componentRegistry.logRegisteredComponents();

  }

  ngOnInit() {

    const viewContainerRef = this.compHost.viewContainerRef;
    viewContainerRef.clear();
    this.FAKE_SERVER_DATA.forEach(data => {
      // retrieve the fitting Component Class based on the __typename from the server data
      const compClass = this.componentRegistry.getComponent(data.__typename);
      // if no component is registered we ignore that server data element
      if (!compClass) return;
      // create the new component based on the retrieved component class and add it to
      // the viewContainerRef from the compHost directive
      const compRef = viewContainerRef.createComponent<typeof compClass>(compClass);
      // set the data from the server so that the component can use
      compRef.instance.data =  data;
    });



  }
}
