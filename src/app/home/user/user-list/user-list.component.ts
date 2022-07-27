import { Component, OnInit ,DoCheck, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/service/main.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit,DoCheck {

  constructor(private apiService: MainService,private fb :FormBuilder,private toast: ToastrService,) { }
  @ViewChild('popUpAdd') popUpAdd:any
  ngAfterViewInit(){
    // console.log('viewChild',this.popUpAdd);
  }
  
  ngOnInit(): void {
    this.getListUser()
    this.createForm()
  }
  ngDoCheck() {
    // if(   this.popupAddVisible == false){
    //   this.registerForm.reset()
    // }
  }
  registerForm!: FormGroup
  editForm!: FormGroup
  listUser:any = []
  inforItem:any = {}
  popupAddVisible:boolean = false
  popupDeleteVisible:boolean = false
  popupEditVisible:boolean = false

  createForm = () => {
    this.registerForm = this.fb.group({
      name:  ['', [Validators.required,Validators.minLength(3)]],
      username: ['', [Validators.required,Validators.minLength(3)]],
      password: ['',[ Validators.required,Validators.minLength(3)]],
      phone: ['',[ Validators.required,Validators.minLength(3)]],
      role: 1,
    })
    this.editForm = this.fb.group({
      name:  ['', [Validators.required,Validators.minLength(3)]],
      username: ['', [Validators.required,Validators.minLength(3)]],
      password: ['',[ Validators.required,Validators.minLength(3)]],
      phone: ['',[ Validators.required,Validators.minLength(3)]],
      role: 1,
    })
    this.registerForm.valueChanges.subscribe((data:any)=>{
    })
    this.editForm.valueChanges.subscribe((data:any)=>{
    })
  }
  

  getListUser = ( ) => {
    this.apiService.get('api/User/danhsachuser').subscribe(
      (data:any) => {
        // console.log(data);
        this.listUser =data
      }
    )
  }
 addUser = () => {
   if(this.registerForm.valid == true){
    let newUser:any  = {}
    newUser = {...this.registerForm.value}
    newUser.role = 1
    // console.log('>>> new user',newUser);
    this.apiService.post('api/User/taouser',newUser).subscribe(
      (data:any) => {
       if(data == null){
         this.isResetForm()
         this.getListUser()
         this.popupAddVisible = false
         this.toast.success('Tạo thành công')
       }
     }
    )
   }else{
     this.toast.warning('Thông tin không chính xác')
   }

 }
 getInforItem(item:any){
   this.inforItem = {...item}
  //  console.log(this.inforItem);
 }
 editUser= ( ) => {
   if(this.editForm.valid == true){
    let itemEdit = this.editForm.value
    itemEdit.role=1
  //  console.log(itemEdit);
    this.apiService.post('api/User/suauser',itemEdit).subscribe(
      (data:any) => {
       if(data == null){
         this.isResetForm()
          this.inforItem = {}
          this.popupEditVisible = false
         this.getListUser()
         this.toast.success('Sửa thành công')
       }
      }
    )
   }else{
     this.toast.warning('Thông tin không chính xác')
   }


 }
 deleteUser = () => {
  let itemDelete:any = {}
  itemDelete.text = this.inforItem.name
  this.apiService.post('api/User/xoauser',itemDelete).subscribe(
    (data:any) => {
      if(data == true){
        this.inforItem ={}
        this.getListUser()
        this.toast.success('Xóa thành công')
        this.popupDeleteVisible = false
      }
    }
  )
 }
  onToolbarPreparing(e: any) {
    const that =this
    let toolbarItems = e.toolbarOptions.items;
    // console.log(toolbarItems);
    toolbarItems.push({
      widget: "dxButton",
      options: {
        icon: "plus",
        onClick: function (e: any) { that.popupAddVisible =true },
        text: 'New user'
      },
      location: "after"
    });
    
  }
  isResetForm(){
    this.registerForm.reset()
    this.editForm.reset()
    this.inforItem = {}
  }


}
