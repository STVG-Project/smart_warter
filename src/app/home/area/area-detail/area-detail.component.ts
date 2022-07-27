import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-area-detail',
  templateUrl: './area-detail.component.html',
  styleUrls: ['./area-detail.component.scss']
})
export class AreaDetailComponent implements OnInit {

  constructor(    private route: ActivatedRoute,  private router: Router,private apiService:MainService,private fb:FormBuilder,private toast:ToastrService) { }

  ngOnInit(): void {
    this.getDataAreaDetail() 
    this.createForm()
  }
  codeArea:string = '' 
  listCustomer:any = []
  dataArea:any = {}
  popupAddVisible:boolean = false
  customerFomr!:FormGroup
  createForm(){
    this.customerFomr = this.fb.group(
      {
        code:['',[Validators.required]],
        name:['',[Validators.required]],
        address:['',[Validators.required]],
        latitude:['',[Validators.required]],
        longitude:['',[Validators.required]],
        iddevice:['',[Validators.required]],
        idmodel:['',[Validators.required]],
        desc:['',[Validators.required]],
      }
      )
      this.customerFomr.valueChanges.subscribe((data:any)=>{
              // console.log('form change',data);
    })
  }
  getDataAreaDetail = () => {
    const code = this.route.snapshot.paramMap.get('code')?.toString()
    this.codeArea = code!
    if(!code){
      this.router.navigateByUrl('/home/area')
    }else{
      this.getListCustomer(code)
      this.getDataArea(code)
    }
  }
  getListCustomer = (code:any) => {
    let url = `api/User/danhsachkhtrongkhuvuc?area=${code}`
    this.apiService.get(url).subscribe(
      (data:any) => {
        console.log('>>>list Customer',data);
        this.listCustomer= data
      }
    )
  }
  getDataArea = (code:any) => {
    this.apiService.get('api/User/danhsachkhuvuc').subscribe(
      (data:any) => {
        let arr = data.filter((elemnt:any) => elemnt.code == code)
        this.dataArea =arr[0]
        console.log('>>>data area',this.dataArea);
        
      }
    )
  }

  addCustomer(){
    let itemCustomer:any = {...this.customerFomr.value}
    
    let url = `api/User/taokhachhangtrongkhuvuc?area=${this.codeArea}`
    // console.log(itemCustomer);
    // console.log(url);
    this.apiService.post(url,itemCustomer).subscribe(
      (data:any) => {
        this.customerFomr.reset()
        this.getDataAreaDetail()
        this.popupAddVisible =false
        this.toast.success('Thêm thành công')
      }
    )
  }

  onToolbarPreparing(e: any) {
    const that =this
    let toolbarItems = e.toolbarOptions.items;
    console.log(toolbarItems);
    toolbarItems.push({
      widget: "dxButton",
      options: {
        icon: "plus",
        onClick: function (e: any) { that.popupAddVisible =true },
        text: 'New customer'
      },
      location: "after"
    });



  }

}
