import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBillToViewComponent } from './order-bill-to-view.component';

describe('OrderBillToViewComponent', () => {
  let component: OrderBillToViewComponent;
  let fixture: ComponentFixture<OrderBillToViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderBillToViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBillToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
