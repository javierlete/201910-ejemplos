import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appIluminar]'
})
export class IluminarDirective {

  @Input('appIluminar') color: string;

  constructor(private el: ElementRef) {
    this.highlight('cyan');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
