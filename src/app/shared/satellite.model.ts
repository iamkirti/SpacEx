import { Links } from "./links.model";
import { Rocket } from "./rocket.model";

export interface Satellite{
 flight_number:number;
 mission_name:string;
 mission_id:string[];
launch_year:string;
launch_success:string;
links:Links;
rocket:Rocket;

}
