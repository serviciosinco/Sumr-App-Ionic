import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraPage } from './tra.page';

describe('TraPage', () => {
  let component: TraPage;
  let fixture: ComponentFixture<TraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
