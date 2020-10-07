import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[ShowHide]'
})
export class ShowHideDirective {

  constructor () {}
  
  
  @HostListener("click") onClick() {
    console.log(this.backgroundColor);
    this.backgroundColor = 'blue'
  }

  @HostBinding('style.background') backgroundColor;
  
}
