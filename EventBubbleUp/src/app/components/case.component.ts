import { Component, OnInit } from '@angular/core';
import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css'],
})
export class CaseComponent implements OnInit {
  //history: any;
  mission: string = '';
  // missions: any;
  // nextMission: any;

  constructor(private missionService: MissionService) {
    missionService.missionReceived$.subscribe((personName) => {
      //this.history.push(`${astronaut} confirmed the mission`);
      console.log(`The receiver ${personName} confirmed the mission`);
    });
  }

  ngOnInit(): void {}

  onClickDetails(personName: string): void {
    console.log(
      '[onClickDetails] Mission announced: Open a new tab for ',
      personName
    );
    this.mission = 'Open a new tab for ' + personName;
    this.missionService.announceMission(this.mission);
    //this.history.push(`Mission "${mission}" announced`);
    // if (this.nextMission >= this.missions.length) {
    //   this.nextMission = 0;
    // }
  }

  // OpenNewTab(personName: string): void {
  //   console.log('[OpenNewTab] Please open a new tab for ', personName);
  //   this.mission = 'Open a new tab for ' + personName;
  // }
}
