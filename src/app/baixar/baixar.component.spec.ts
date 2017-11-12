import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaixarComponent } from './baixar.component';

describe('BaixarComponent', () => {
  let component: BaixarComponent;
  let fixture: ComponentFixture<BaixarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaixarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaixarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
