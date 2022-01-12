import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText:String='';
  users:any;
  payload:any;
  isLoading:boolean=false;
  jobs:any;
  

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {
  }

  geSearchResults(searchedUserName:any){
    this.payload= {"name":{"term":searchedUserName}};
    this.isLoading=true;
      return this.http.post<any>(environment.search_url+'/people/_search?lang=en&size=20&aggregate=false',this.payload  ).subscribe(
        (response) =>{
          this.users='';
          this.users= response.results;
          this.isLoading=false;
        } 
      );
  }

  searchUsers(event:any){
    this.geSearchResults(event.target.value);
  }

  searchJobs(){
    let payload = {"bestfor":{"username":"puneetmsethi"}};
    this.isLoading=true;
    return this.http.post<any>(environment.search_url+'/opportunities/_search?currency=USD%24&periodicity=hourly&lang=en&size=20&aggregate=true',payload  ).subscribe(
      (response) =>{
        console.log(response);
        this.jobs= response.results;
        this.isLoading=false;
      } 
    );
  }

}
