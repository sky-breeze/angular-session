import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingSessionComponent } from './routing-session.component';

describe('RoutingSessionComponent', () => {
  let component: RoutingSessionComponent;
  let fixture: ComponentFixture<RoutingSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
