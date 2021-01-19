import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DshPage } from './dsh.page';

describe('DshPage', () => {
  let component: DshPage;
  let fixture: ComponentFixture<DshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DshPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
