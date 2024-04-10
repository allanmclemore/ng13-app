import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderShipToViewComponent } from './order-ship-to-view.component';

describe('OrderShipToViewComponent', () => {
  let component: OrderShipToViewComponent;
  let fixture: ComponentFixture<OrderShipToViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderShipToViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderShipToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
