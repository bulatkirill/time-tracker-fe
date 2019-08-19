import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntryRowComponent } from './time-entry-row.component';

describe('TimeEntryRowComponent', () => {
  let component: TimeEntryRowComponent;
  let fixture: ComponentFixture<TimeEntryRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeEntryRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEntryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
