import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  constructor() {}

  // Observable string sources
  private missionAnnounceSource = new Subject<string>();
  private missionReceiveSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnounceSource.asObservable();
  missionReceived$ = this.missionReceiveSource.asObservable();

  // Service message commands
  announceMission(mission: string) {
    console.log('[announceMission] ', mission);
    this.missionAnnounceSource.next(mission);
  }

  receiveMission(receiver: string, mission: string) {
    console.log('[receiveMission] ', receiver, ' received mission: ', mission);
    this.missionReceiveSource.next(receiver);
  }
}
