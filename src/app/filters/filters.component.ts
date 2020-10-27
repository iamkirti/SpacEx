import { Component, OnInit,Input, OnDestroy } from '@angular/core';

import { Satellite } from '../shared/satellite.model';
import {Subscription} from 'rxjs';
import { FiltersService } from '../shared/filters.service';
import { ActivatedRoute, Router ,NavigationEnd} from '@angular/router';
import { Filters } from './filters.model';
import { QueryParams } from '../shared/queryparams.model';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit,OnDestroy {
private satellites:Satellite[]=[];
private filterSub:Subscription;
filterss:Filters;
landflag:string;
launchflag:string;
yearflag:string;
currentRoute:string;
state:string
  constructor(private filterS:FiltersService,private route: ActivatedRoute,
    private router: Router) {


     }
  ngOnInit(): void {
  }



  onSuccessLaunch(data:any){
   this.launchflag=data.target.innerText;
   if(this.launchflag==='True'){
    this.launchflag='true';
   }else if(this.launchflag==='False'){
    this.launchflag='false';
   }
   this.filterChanged();
  }
  onYearClick(data:any){

    this.yearflag=data.target.innerText;
    this.filterChanged();
  }
  onSuccessLanding(data:any){
    this.landflag=data.target.innerText;
   if(this.landflag==='True'){
    this.landflag='true';
   }else if(this.landflag==='False'){
    this.landflag='false';
   }

   this.filterChanged();
}

 filterChanged() {
   const queryParams=this.getQueryParamsFromFilters();
  this.router.navigate([], {
    relativeTo: this.route,
    queryParams: queryParams,
    queryParamsHandling: 'merge',
  });
this.filterS.getSatellites(queryParams);
  this.filterSub=this.filterS.getSatellitesUpdateListener()
  .subscribe((satellites)=>{
  this.satellites=satellites;

  });

}

getQueryParamsFromFilters(): QueryParams {
  return <QueryParams>{
    land_success: this.landflag,
    launch_success: this.launchflag,
    launch_year: this.yearflag
  };
}



  ngOnDestroy(){
    this.filterSub.unsubscribe();
    }
}
