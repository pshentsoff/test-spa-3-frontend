import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsEditComponent } from './goods-edit.component';

describe('GoodsEditComponent', () => {
  let component: GoodsEditComponent;
  let fixture: ComponentFixture<GoodsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
