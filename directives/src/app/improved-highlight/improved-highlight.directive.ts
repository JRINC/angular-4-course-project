import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appImprovedHighlight]'
})
export class ImprovedHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appImprovedHighlight') highLightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string; // = this.defaultColor;// 'transparent';
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highLightColor; // 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor; // 'transparent';
  }
}
