import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http:HttpClient) { }


  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'google-news13.p.rapidapi.com',
      'x-rapidapi-key': '75767de65cmsh630d6f7b1920d99p16ae45jsnbf2fd0dd9fe0'  // Replace 'YOUR_API_KEY_HERE' with your actual API key
    })
  };


  // Lastest URL
  lastestApiURL = "https://google-news13.p.rapidapi.com/latest?lr=en-IN";
  //business URL 
  businessApiUrl = "https://google-news13.p.rapidapi.com/business?lr=en-IN";
  // entertainment URL 
  entertainmentApiUrl = "https://google-news13.p.rapidapi.com/entertainment?lr=en-IN";
  // health URL 
  healthApiUrl = "https://google-news13.p.rapidapi.com/health?lr=en-IN";
  // sport URL 
  sportApiUrl = "https://google-news13.p.rapidapi.com/sport?lr=en-IN";
  // science URL 
  scienceApiUrl = "https://google-news13.p.rapidapi.com/science?lr=en-IN";
  // technology URL
  technologyApiUrl = "https://google-news13.p.rapidapi.com/technology?lr=en-IN";



  // Lastest News
  lastestNews():Observable<any>{
    return this._http.get(this.lastestApiURL,this.httpOptions);
  }
  // Business News 
  businessNews():Observable<any>{
    return this._http.get(this.businessApiUrl,this.httpOptions);
  }
  // Entertainment News 
  entertainmentNews():Observable<any>{
    return this._http.get(this.entertainmentApiUrl,this.httpOptions);
  }
  // Health News
  healthNews():Observable<any>{
    return this._http.get(this.healthApiUrl,this.httpOptions);
  }
  // Sport News
  sportNews():Observable<any>{
    return this._http.get(this.sportApiUrl,this.httpOptions);
  }
  // Science News
  scienceNews():Observable<any>{
    return this._http.get(this.scienceApiUrl,this.httpOptions);
  }
  // Technology News
  technologyNews():Observable<any>{
    return this._http.get(this.technologyApiUrl,this.httpOptions);
  }
}
