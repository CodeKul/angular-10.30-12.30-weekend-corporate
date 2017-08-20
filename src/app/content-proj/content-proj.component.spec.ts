import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjComponent } from './content-proj.component';

describe('ContentProjComponent', () => {
  let component: ContentProjComponent;
  let fixture: ComponentFixture<ContentProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
