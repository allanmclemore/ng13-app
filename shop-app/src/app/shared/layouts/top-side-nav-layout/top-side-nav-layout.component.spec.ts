import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSideNavLayoutComponent } from './top-side-nav-layout.component';

describe('TopSideNavLayoutComponent', () => {
  let component: TopSideNavLayoutComponent;
  let fixture: ComponentFixture<TopSideNavLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSideNavLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSideNavLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
