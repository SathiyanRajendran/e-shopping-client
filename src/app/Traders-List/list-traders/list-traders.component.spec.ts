import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTradersComponent } from './list-traders.component';

describe('ListTradersComponent', () => {
  let component: ListTradersComponent;
  let fixture: ComponentFixture<ListTradersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTradersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTradersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
