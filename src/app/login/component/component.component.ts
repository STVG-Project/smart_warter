import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  constructor(  private fb: FormBuilder,private apiService : LoginService,private toast:ToastrService,    private router: Router,) { }

  ngOnInit(): void {
    this.createForm()
  }

  registerForm!: FormGroup


  createForm = () => {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(3)]],
      password: ['',[ Validators.required,Validators.minLength(3)]],
    })
    this.registerForm.valueChanges.subscribe((data:any)=>{
      // console.log('form change',data);
    })
  }

  login = () => {
    let user = {...this.registerForm.value}
    // console.log(user);
    
    this.apiService.signIn('api/User/login',user).subscribe(
      (response:any) => {
        // console.log(response);
        let res = JSON.parse(response)
        localStorage.setItem('token',res.token)
        localStorage.setItem('user',res.name)
        this.toast.success('Đăng nhập thành công')
        this.router.navigateByUrl('/home')
      }
    )
  }
}
