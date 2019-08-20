import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TimeEntryDetailModalComponent} from '../time-entry-detail-modal/time-entry-detail-modal.component';

@Component({
  selector: 'app-time-entry-row',
  templateUrl: './time-entry-row.component.html',
  styleUrls: ['./time-entry-row.component.scss']
})
export class TimeEntryRowComponent implements OnInit {

  @Input() timeEntry: TimeEntry;

  constructor(private modalService: NgbModal) {
  }

  openDetailModal() {
    const modalRef = this.modalService.open(TimeEntryDetailModalComponent, {centered: true});
    modalRef.componentInstance.timeEntry = this.timeEntry;

    modalRef.result.then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
