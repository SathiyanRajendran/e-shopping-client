import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTradersComponent } from './add-traders.component';

describe('AddTradersComponent', () => {
  let component: AddTradersComponent;
  let fixture: ComponentFixture<AddTradersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTradersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTradersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
