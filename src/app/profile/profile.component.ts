import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  bios:any;
  selectedObj:any={};
  isLoading=true;

  expertStrength:any=[];
  proficientStrength:any=[];
  masterStrength:any=[];
  noExperienceInterestedStrength:any=[];
  noviceStrength:any=[];

  strengths:any=[];
  constructor(private http: HttpClient,private _route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this._route?.params?.subscribe(params => {
      if(Object.keys(params).length === 0){
        this.selectedObj={
          username:"puneetmsethi"
        }
      }else{
        this.selectedObj=params;
      }
      this.getBios();
  });

  
  }

  getBios(){
    this.isLoading=true;
      return this.http.get<any>(environment.app_url+'/bios/'+this.selectedObj.username).subscribe(
        (response) =>{
          this.bios = response;
          console.log(this.bios);
          for(let i=0; i< response.strengths.length; i++){
            if(response.strengths[i].proficiency== 'expert'){
              this.expertStrength.push(response.strengths[i]);
            }
            if(response.strengths[i].proficiency== 'proficient'){
              this.proficientStrength.push(response.strengths[i]);
            }
            if(response.strengths[i].proficiency== 'master'){
              this.masterStrength.push(response.strengths[i]);
            }
            if(response.strengths[i].proficiency== 'no-experience-interested'){
              this.noExperienceInterestedStrength.push(response.strengths[i]);
            }
            if(response.strengths[i].proficiency== 'novice'){
              this.noviceStrength.push(response.strengths[i]);
            }
          }
          this.isLoading=false;
        } 
      );
  }
}
