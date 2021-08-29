import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  // providers: [MissionService],
})
export class TabComponent implements OnInit, OnDestroy {
  mission = '<no mission announced>';
  //command = '<no command yet>';
  received = false;
  announced = false;
  //subscription: Subscription;

  constructor() {
    // private missionService: MissionService // private cd: ChangeDetectorRef
    // this.subscription = missionService.missionAnnounced$.subscribe(
    //   (mission) => {
    //     this.mission = mission;
    //     this.announced = true;
    //     this.received = false;
    //   }
    // );
    // this.command.subscribe((data) => {
    //   this._command = data;
    //   this.cd.markForCheck();
    // });
  }

  ngOnInit(): void {}

  // ngAfterViewChecked(): void {
  //   if (this.announced) {
  //     console.log('[ngAfterViewChecked] Mission announced');
  //     console.log('[ngAfterViewChecked] Mission received');
  //     this.received = true;
  //     console.log('[ngAfterViewChecked] Do mission');
  //     this.received = false;
  //     console.log('[ngAfterViewChecked] Mission finished');
  //     this.announced = false;
  //     console.log('[ngAfterViewChecked] Wait for next mission');
  //   }
  // }

  // receiveMission(self: string, mission: string) {
  //   this.received = true;
  //   this.missionService.receiveMission(self, mission);
  // }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    //this.subscription.unsubscribe();
  }
}
