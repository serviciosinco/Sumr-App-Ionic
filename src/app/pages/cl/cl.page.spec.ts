import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClPage } from './cl.page';

describe('ClPage', () => {
  let component: ClPage;
  let fixture: ComponentFixture<ClPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
