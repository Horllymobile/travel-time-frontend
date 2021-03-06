import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Travel } from 'src/app/models/travel';


const url = 'api/travels';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private http: HttpClient){}

  getTravels():Observable<Travel>{
    return this.http.get<Travel>(url);
  }

}
