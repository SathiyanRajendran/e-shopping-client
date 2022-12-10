import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustViewProductComponent } from './cust-view-product.component';

describe('CustViewProductComponent', () => {
  let component: CustViewProductComponent;
  let fixture: ComponentFixture<CustViewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustViewProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
