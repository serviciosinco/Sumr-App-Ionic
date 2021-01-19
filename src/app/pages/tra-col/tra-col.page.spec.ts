import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraColPage } from './tra-col.page';

describe('TraColPage', () => {
  let component: TraColPage;
  let fixture: ComponentFixture<TraColPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraColPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraColPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
