import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor {

  @Input() label!: string;
  @Input() nameLabel!: string;
  @Input() type = 'text';
  @Input() dis:boolean = false
  @Input ('control') control:any
  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }
  ngOnInit(): void {

  }

  // get message(){
  //   console.log(this.control)
  //   for(let err in this.control.errors){
  //       if(this.control.dirty){
  //         return this.getErrorsMessage(err ,this.control.errors[err])
  //       }
  //   }
  //   return null
  // }
  // getErrorsMessage = (err:any ,value:any) => {
  //   let messages:any = {
  //     'required' : 'required',
  //     'minlength' :`minlength : ${value.requiredLength}`,
  //     'maxlength' :`maxlength : ${value.requiredLength}`
  //    }
  //    console.log('>>message',messages);
     
  //    return messages[err]
  // }
  writeValue(obj: any): void {
    
  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }
}
