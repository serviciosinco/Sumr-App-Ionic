import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUsPage } from './chat-us.page';

describe('ChatPage', () => {
  let component: ChatUsPage;
  let fixture: ComponentFixture<ChatUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatUsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
