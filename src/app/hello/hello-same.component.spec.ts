import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloSameComponent } from './hello-same.component';

describe('HelloSameComponent', () => {
  let component: HelloSameComponent;
  let fixture: ComponentFixture<HelloSameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloSameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloSameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
