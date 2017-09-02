import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  msg: string;
  constructor() { }

  ngOnChanges(): void {
    this.lg(`ngOnChanges`);
  }
  ngOnInit() {
    this.lg(`ngOnInit`);
  }

  ngDoCheck(): void {
    this.lg(`ngDoCheck`);
  }
  ngAfterContentInit(): void {
    this.lg(`ngAfterContentInit`);
  }
  ngAfterContentChecked(): void {
    this.lg(`ngAfterContentChecked`);
  }
  ngAfterViewInit(): void {
    this.lg(`ngAfterViewInit`);
  }
  ngAfterViewChecked(): void {
    this.lg(`ngAfterViewChecked`);
  }
  ngOnDestroy(): void {
    this.lg(`onDestroy`);
  }
  lg(msg: string) {
    console.log(msg);
  }

  changeIt() {
    this.msg = new Date().toString();
  }
}
