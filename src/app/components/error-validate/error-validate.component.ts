import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.scss']
})
export class ErrorValidateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  
  @Input ('control') control:any
 

  get message(){
    console.log(this.control)
    for(let err in this.control.errors){
        if(this.control.dirty){
          return this.getErrorsMessage(err ,this.control.errors[err])
        }
    }
 
  }
  getErrorsMessage = (err:any ,value:any) => {
    let messages:any = {
      'required' : 'required',
      'minlength' :`minlength : ${value.requiredLength}`,
      'maxlength' :`maxlength : ${value.requiredLength}`
     }
     console.log('>>message',messages);
     
     return messages[err]
  }
}
