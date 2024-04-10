import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReviewViewComponent } from './order-review-view.component';

describe('OrderReviewViewComponent', () => {
  let component: OrderReviewViewComponent;
  let fixture: ComponentFixture<OrderReviewViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReviewViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReviewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
