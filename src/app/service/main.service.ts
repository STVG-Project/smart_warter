import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';  
import { catchError } from 'rxjs/operators'
import { of as observableOf } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(public http: HttpClient,private toast:ToastrService) {  }

  hostName:string = environment.host_serve

  getHeader(){
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "token": localStorage.getItem("token")!,
      }),
    } 
  }

  get(uri:string) {
    let url = this.hostName+uri
    return this.http.get(url,this.getHeader(),).pipe(
      catchError((e) => {
        if (e.status === 400) {
          this.toast.error("Thất bại");
        }
        return observableOf(e.error || { Success: false, Data: e.statusText});
 
      }))
  }

  post(uri:string,data:any){
    let url = this.hostName+uri
    return this.http.post(url,JSON.stringify(data),this.getHeader() ).pipe(
      catchError((e) => {
        if (e.status === 400) {
          this.toast.error("Thất bại");
        }
        return observableOf(e.error || { Success: false, Data: e.statusText});
 
      }))
    }
}
