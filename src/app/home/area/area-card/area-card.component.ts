import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'area-card',
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.scss']
})
export class AreaCardComponent implements OnInit {

  @Input() public area:any
  @Output() deleteAction = new EventEmitter<string>()
  @Output() editArea = new EventEmitter<string>()
  code: string = ''
  constructor() {}

  ngOnInit(): void {

  
  }


  deleteArea() {
    this.deleteAction.emit(this.area)
  }
  addUserToArea(){
    this.editArea.emit(this.area)
  }
}
