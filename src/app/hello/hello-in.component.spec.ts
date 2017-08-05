import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloInComponent } from './hello-in.component';

describe('HelloInComponent', () => {
  let component: HelloInComponent;
  let fixture: ComponentFixture<HelloInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
