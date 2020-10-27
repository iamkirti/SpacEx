
import { Injectable } from '@angular/core';
import {Subject, ReplaySubject}from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Satellite } from '../shared/satellite.model';
import { ActivatedRoute, Router } from '@angular/router';
import{map} from 'rxjs/operators';
import { Filters } from '../filters/filters.model';

@Injectable({providedIn:'root'})
export class FiltersService{
private satellites:Satellite[]=[];
private satellitesUpdated=new ReplaySubject<Satellite[]>(1);
orderObj:any;
constructor(private http:HttpClient,private route: ActivatedRoute,
  private router: Router){

}
getSatellitesInit(){
  this.http.get<{satellites:any}>('https://api.spaceXdata.com/v3/launches?limit=100')
  .subscribe((satellites)=>{

    console.log("satellites",this.satellites);
    console.log("satellites",satellites);
         for (let sats in satellites) {
         let value=satellites[sats];
          this.satellites.push({
            flight_number:value.flight_number,
            mission_name:value.mission_name,
            mission_id:value.mission_id,
            launch_year:value.launch_year,
            launch_success:value.launch_success,
            links:value.links.mission_patch_small,
            rocket:value.rocket.first_stage.cores[0].land_success
          });

         // this.satellitesUpdated.next([...this.satellites]);

      }
      this.satellitesUpdated.next([...this.satellites]);

  });
}
getSatellites(queryParams:Filters){

  var queryParams1='';
for(let key in queryParams){
  console.log("key",key);
  let value=queryParams[key];
  console.log("value",value);
  if(value !==undefined)
  queryParams1+=`&${key}=${value}`;
  console.log("queryParams@@",queryParams1);
}

console.log('https://api.spaceXdata.com/v3/launches?limit=100'+queryParams1);


this.http.get<{satellites:any}>('https://api.spaceXdata.com/v3/launches?limit=100'+queryParams1)
  .subscribe((satellites)=>{
    this.satellites=[];
    console.log("satellites",this.satellites);
    console.log("satellites",satellites);
         for (let sats in satellites) {
         let value=satellites[sats];
          this.satellites.push({
            flight_number:value.flight_number,
            mission_name:value.mission_name,
            mission_id:value.mission_id,
            launch_year:value.launch_year,
            launch_success:value.launch_success,
            links:value.links.mission_patch_small,
            rocket:value.rocket.first_stage.cores[0].land_success
          });

         // this.satellitesUpdated.next([...this.satellites]);

      }
      this.satellitesUpdated.next([...this.satellites]);

  });
}

getSatellitesUpdateListener(){
return this.satellitesUpdated.asObservable();
}

}
