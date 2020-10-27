import { Component, OnInit } from '@angular/core';
import { Satellite } from '../shared/satellite.model';
import { Subscription } from 'rxjs';
import { FiltersService } from '../shared/filters.service';


@Component({
  selector: 'app-sat-missions',
  templateUrl: './sat-missions.component.html',
  styleUrls: ['./sat-missions.component.css']
})
export class SatMissionsComponent implements OnInit {
  satellites:Satellite[]=[];


  private filterSub:Subscription;
  constructor(private filterS:FiltersService) { }

  ngOnInit(): void {
    this.filterS.getSatellitesInit();
this.filterSub=this.filterS.getSatellitesUpdateListener()
.subscribe((satellites:Satellite[])=>{

this.satellites=satellites;
//console.log("inside sat missiom ts file",this.satellites);
});


  }

}
