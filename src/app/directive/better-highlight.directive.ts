import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2
 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string = 'transparent';
  @Input('appBetterHighlight') highlightColor:string = 'blue';
  @HostBinding('style.backgroundColor') bgColor = 'transparent'

  constructor(private eleRef: ElementRef, private renderer : Renderer2) { }
  ngOnInit(): void {
    // this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','green');
    this.bgColor = 'greenyellow'
  }

  @HostListener('mouseenter') mouseover(eventdata:Event){
    // this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','green');
    // this.bgColor = 'red'
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventdata:Event){
    // this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','yellowgreen');
    // this.bgColor = 'yellow'
    this.bgColor = this.defaultColor;
  }

}
