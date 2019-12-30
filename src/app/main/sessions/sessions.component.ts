import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SessionService} from '../../service/session/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit, OnChanges {

  sessions: Session[] = [];

  @Input() browserId: number;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if ('browserId' === propName) {
        const newBrowserId = changes[propName];
        this.loadSessions(newBrowserId.currentValue);
        break;
      }
    }
  }

  private loadSessions(browserId: number): void {
    if (browserId != null) {
      this.sessionService.getSessionsByBrowserId(browserId).subscribe((sessions: Session[]) => {
        this.sessions = sessions;
      });
    }
  }

}
