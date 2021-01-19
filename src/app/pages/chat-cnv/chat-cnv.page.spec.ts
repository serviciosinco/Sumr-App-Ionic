import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCnvPage } from './chat-cnv.page';

describe('ChatCnvPage', () => {
  let component: ChatCnvPage;
  let fixture: ComponentFixture<ChatCnvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatCnvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatCnvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
