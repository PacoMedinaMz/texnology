import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPDFService {

  constructor(private http:HttpClient) { }

  getUsers(bd,id):Observable <any>{
    return this.http.get(`http://localhost:20404/${bd}/${id}`)
  }
}
