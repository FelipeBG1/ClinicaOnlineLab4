import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtnUsuarios]'
})
export class BtnUsuariosDirective {

  constructor(private el : ElementRef, private re : Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.re.setStyle(this.el.nativeElement,'background-color','rgba(98, 25, 141, 0.904)');
  }
 
  @HostListener('mouseleave') onMouseExit() {
    this.re.setStyle(this.el.nativeElement,'background-color','rgba(118, 29, 170, 0.911)');   
  }

}
