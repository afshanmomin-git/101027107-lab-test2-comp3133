import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { Location } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  styleUrls: ['./missiondetails.component.css'],
  templateUrl: './missiondetails.component.html',
})
export class MissiondetailsComponent implements OnInit {
  mission: Mission = {
    flight_number: 0,
    mission_name: '',
    launch_year: 0,
    rocket: {
      rocket_name: '',
      rocket_type: '',
    },
    launch_site: {
      site_name_long: '',
    },
    links: {
      mission_patch_small: '',
    },
    details: '',
  };

  constructor(
    private spacexapiService: LaunchService,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getMission(id);
  }

  getMission(id: number): void {
    this.spacexapiService.getMission(id).subscribe((mission) => {
      this.mission = mission;
    });
  }

}
