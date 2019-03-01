import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[menu-dropDown]'
})
export class MenuDropDownDirective {
  el: HTMLElement = this.elementRef.nativeElement;

  constructor(public elementRef: ElementRef, private renderer: Renderer2) {
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.elementRef.nativeElement, 'open');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'open');
  }
}
