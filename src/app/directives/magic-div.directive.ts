import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  Input,
  OnInit,
  HostListener
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[magicDiv]'
})
export class MagicDivDirective implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('magicDiv')
  defCol: string;

  @HostBinding('style.background')
  bakCol: string;

  @HostListener('mouseenter')
  onIn() {
    this.bakCol = this.randomColor();
  }

  @HostListener('mouseleave')
  onOut() {
    this.bakCol = this.randomColor();
  }

  constructor(
    private elRef: ElementRef,
    private rend: Renderer2
  ) {
    //this.elRef.nativeElement.style.background = 'red';

    //this.rend.setStyle(this.elRef.nativeElement, 'background', 'green');
  }

  ngOnInit() {
    this.bakCol = this.defCol;
  }

  randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  }
}
