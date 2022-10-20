import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBgColor]'
})
export class BgDirective{
    constructor(el: ElementRef){
        el.nativeElement.style.backgroundColor = '#673ab7';
    }
}