import { Inject, Injectable, InjectionToken } from '@angular/core';

export interface MapEntry<T = string> {
  id: T;
  component: any;
}

export type ComponentMap<T=string> = Array<MapEntry<T>>;

export const COMPONENT_MAP = new InjectionToken<ComponentMap>('component.map');

@Injectable({
  providedIn:'root'
})
export class ComponentRegistry<T = string> {

  private _map: ComponentMap<T> = []

  constructor(@Inject(COMPONENT_MAP) componentMap: ComponentMap<T>) {
    this._map = componentMap;
  }

  getComponent(id: T): any | undefined {
    const mapEntry = this._map.find((el) => el.id === id);
    if (!mapEntry) {
      return undefined;
    } else {
      return mapEntry.component;
    }
  }

  logRegisteredComponents(){
    console.log('ComponentRegistry._map: ', this._map);
  }

}
