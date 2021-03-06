import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TimeEntryService} from '../../../service/time-entry/time-entry.service';

@Component({
  selector: 'app-time-entry-detail-modal',
  templateUrl: './time-entry-detail-modal.component.html',
  styleUrls: ['./time-entry-detail-modal.component.scss']
})
export class TimeEntryDetailModalComponent implements OnInit {

  @Input()
  timeEntry: TimeEntry;

  constructor(private activeModal: NgbActiveModal, private timeEntryService: TimeEntryService) {
  }

  closeModal() {
    this.activeModal.close('Modal closed');
  }

  ngOnInit() {
  }

  saveTimeEntry() {
    this.timeEntryService.updateTimeEntry(this.timeEntry).subscribe((timeEntry: TimeEntry) => {
      this.timeEntry = timeEntry;
    });
  }
}
