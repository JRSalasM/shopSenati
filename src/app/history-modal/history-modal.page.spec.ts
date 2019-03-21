import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryModalPage } from './history-modal.page';

describe('HistoryModalPage', () => {
  let component: HistoryModalPage;
  let fixture: ComponentFixture<HistoryModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
