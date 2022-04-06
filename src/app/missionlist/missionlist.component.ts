import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  styleUrls: ['./missionlist.component.css'],
  templateUrl: './missionlist.component.html',

})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spacexapiService: LaunchService) {}

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions(): void {
    this.spacexapiService.getMissions().subscribe((missions) => {
      this.missions = missions;
    });
  }

}
