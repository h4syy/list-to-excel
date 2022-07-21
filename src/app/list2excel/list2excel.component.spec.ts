import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List2excelComponent } from './list2excel.component';

describe('List2excelComponent', () => {
  let component: List2excelComponent;
  let fixture: ComponentFixture<List2excelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List2excelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List2excelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
