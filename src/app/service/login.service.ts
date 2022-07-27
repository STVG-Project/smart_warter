import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators'
import { of as observableOf } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient,private toast:ToastrService) { }
  hostName:string = environment.host_serve
  signIn(uri:string,param:any){
    let url = this.hostName+uri
    return this.http.post(url,JSON.stringify(param),{responseType: "text", headers:new HttpHeaders({ 'Content-Type': 'application/json'}) })
    .pipe(
      catchError((e) => {
        if (e.status === 400) {
          this.toast.error("Đăng nhập thất bại");
        }
        // return observableOf(e.error || { Success: false, Data: 'Thất bại',e.statusText});
        return observableOf();
      }))
    }
}
