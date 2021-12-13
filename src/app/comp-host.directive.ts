import { Directive, ViewContainerRef } from '@angular/core';


// We wrote this directive so that we have access to the viewContainerRef as early as possible
// for a detailed explanation see: https://indepth.dev/posts/1057/here-is-how-to-get-viewcontainerref-before-viewchild-query-is-evaluated
@Directive({
  selector: '[compHost]',
})
export class CompHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
