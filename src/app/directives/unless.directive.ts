import { Directive, ViewContainerRef, TemplateRef, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[unless]'
})
export class UnlessDirective implements OnInit {

  @Input()
  private unless: boolean;

  constructor(
    private vcRef: ViewContainerRef,
    private tmRef: TemplateRef<any>,
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    if (this.unless) {
      this.vcRef.createEmbeddedView(this.tmRef);
    } else {
      this.vcRef.clear();
    }
  }
}
