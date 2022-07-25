import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToExcelComponent } from './list-to-excel.component';

describe('ListToExcelComponent', () => {
  let component: ListToExcelComponent;
  let fixture: ComponentFixture<ListToExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListToExcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListToExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
