import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserableSessionComponent } from './obserable-session.component';

describe('ObserableSessionComponent', () => {
  let component: ObserableSessionComponent;
  let fixture: ComponentFixture<ObserableSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserableSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserableSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
