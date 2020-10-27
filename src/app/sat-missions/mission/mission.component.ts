import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../../shared/satellite.model';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  @Input() satellite:Satellite;
  @Input() index:number;
  constructor() { }

  ngOnInit(): void {
  }

}
