import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appDarkenOnHover]' // Colocar entre colchetes para utilizar o selector como atributo
})
export class DarkenOnHoverDirective {

    @Input() brightness:string = '70%'

    constructor(
        private el:ElementRef,
        private render: Renderer
    ) {}

    @HostListener('mouseover')
    darkenOn() {
        this.render.setElementStyle(this.el.nativeElement,'filter',`brightness(${this.brightness})`)
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.render.setElementStyle(this.el.nativeElement,'filter','brightness(100%)')
    }
}