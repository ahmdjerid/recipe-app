import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  opendMenu = false;

  @HostListener('click') openMenu() {
    this.opendMenu = !this.opendMenu;
    if (this.opendMenu) {
      this.renderer.removeClass(this.el.nativeElement, 'open');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'open');
    }
  }
}


