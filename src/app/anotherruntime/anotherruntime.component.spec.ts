import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherruntimeComponent } from './anotherruntime.component';

describe('AnotherruntimeComponent', () => {
  let component: AnotherruntimeComponent;
  let fixture: ComponentFixture<AnotherruntimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherruntimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherruntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
