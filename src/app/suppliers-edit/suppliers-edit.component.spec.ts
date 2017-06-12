import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersEditComponent } from './suppliers-edit.component';

describe('SuppliersEditComponent', () => {
  let component: SuppliersEditComponent;
  let fixture: ComponentFixture<SuppliersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
