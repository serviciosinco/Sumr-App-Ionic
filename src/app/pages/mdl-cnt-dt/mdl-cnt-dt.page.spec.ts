import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlCntDtPage } from './mdl-cnt-dt.page';

describe('MdlCntDtPage', () => {
  let component: MdlCntDtPage;
  let fixture: ComponentFixture<MdlCntDtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdlCntDtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdlCntDtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
