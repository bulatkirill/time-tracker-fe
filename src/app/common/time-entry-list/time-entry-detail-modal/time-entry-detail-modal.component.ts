import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-time-entry-detail-modal',
  templateUrl: './time-entry-detail-modal.component.html',
  styleUrls: ['./time-entry-detail-modal.component.scss']
})
export class TimeEntryDetailModalComponent implements OnInit {

  @Input()
  timeEntry: TimeEntry;

  constructor(public activeModal: NgbActiveModal) {
  }

  closeModal() {
    this.activeModal.close('Modal closed');
  }

  ngOnInit() {
  }

}
