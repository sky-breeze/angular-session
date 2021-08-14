import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition:boolean){
    if(!condition){
      this.viewContainRef.createEmbeddedView(this.tempRef)
    }else{
      this.viewContainRef.clear()
    }
  }

  constructor(private tempRef: TemplateRef<any>, private viewContainRef: ViewContainerRef) { }

}
