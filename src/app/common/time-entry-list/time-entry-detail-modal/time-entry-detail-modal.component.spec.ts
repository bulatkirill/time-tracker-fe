import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntryDetailModalComponent } from './time-entry-detail-modal.component';

describe('TimeEntryDetailModalComponent', () => {
  let component: TimeEntryDetailModalComponent;
  let fixture: ComponentFixture<TimeEntryDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeEntryDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEntryDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
