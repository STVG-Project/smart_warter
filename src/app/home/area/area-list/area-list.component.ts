import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.scss']
})
export class AreaListComponent implements OnInit {

  public _areaList: any = []
  public rawData: any = []
  public totalPage: number = 0
  public filter: any = {}
  public pageIndex: number = 1
  public pageSize: number = 12
  public fileExists: boolean = false
  public flagSynchronize: boolean = true


  constructor(private apiService:MainService, private toast:ToastrService,private fb :FormBuilder ) {}

  ngOnInit(): void {
    this.getListArea()
    this.createForm()
  }
  areaForm!: FormGroup
  editForm!: FormGroup
  listArea = []
  popupAddVisible:boolean = false
  popupEditVisible:boolean = false
  popupDeleteVisible:boolean = false
  inforItem:any = {}
  


  createForm = () => {
    this.areaForm = this.fb.group({
      code:  ['', [Validators.required]],
      name: ['', [Validators.required]],
      desc: ['',[ Validators.required]],

    })
    this.editForm = this.fb.group({
      code:  ['', [Validators.required]],
      name: ['', [Validators.required]],
      desc: ['',[ Validators.required]],

    })
    this.areaForm.valueChanges.subscribe((data:any)=>{
      // console.log('form change',data);
      
    })
  }
  getListArea = () => {
    this.apiService.get('api/User/danhsachkhuvuc').subscribe(
      (data:any) => {
        // console.log(data);
        this.listArea = data
        this.listArea.forEach((element:any) => {
          element.user = JSON.parse(element.user)
          
        })
        // console.log(this.listArea);
        
      }
    )
  }

  addArea = () => {
    let itemArea = {...this.areaForm.value}
    this.apiService.post('api/User/taokhuvuc',itemArea).subscribe(
      (data:any) => {
        this.areaForm.reset()
        this.getListArea()
        this.popupAddVisible = false
        this.toast.success('Tạo thành công')
      }
    )
  }

  editArea(){

  }
  getInforArea(e:any){
    console.log('>>>emit adduser',e);
    this.inforItem = {...e}
  }
  deleteArea(e:any){
    console.log('>>> itemDelete',e);
    this.popupDeleteVisible = true
    this.inforItem = {...e}
  }
  submitDeleteArea = () => {
    let itemDelete:any  = {}
    itemDelete.text = this.inforItem.code
    this.apiService.post('api/User/xoakhuvuc',itemDelete).subscribe(
      (data:any) => {
        this.inforItem = {}
        this.getListArea()
        this.popupDeleteVisible = false
        this.toast.success('Xóa thành công')
      }
    )
  }

  ApplyFilter() {
    const val = this.filter.searchText.toLowerCase()
    console.log(val)
    const temps = this.rawData
    this.rawData = this.rawData.filter(function (d:any) {
      return (
        d.code?.toLowerCase().indexOf(val) !== -1 ||
        d.name?.toLowerCase().indexOf(val) !== -1 ||
        d.info?.toLowerCase().indexOf(val) !== -1 ||
        !val
      )
    })
    this.loadPage(this.pageIndex, this.pageSize, this.rawData)
    this.rawData = temps
  }

  loadPage(pageIndex: number, pageSize: number, data: any[]) {
    console.log('loadpage')
    this._areaList = data.slice(
      (pageIndex - 1) * pageSize,
      pageIndex * pageSize,
    )
    this.totalPage = data.length
  }

  pageChanged(event: any) {
    this.loadPage(event.page, this.pageSize, this.rawData)
  }


   cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" }
  ];
  selectedCountries2: any
}
