import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { formState, formState2, formState3, formState4, formState5, formState6, slider, slideleft } from '../animation';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-pagination',
  templateUrl: './register-pagination.component.html',
  styleUrls: ['./register-pagination.component.css'],
  animations:[formState,
    formState2,
    formState3,
    formState4,
    formState5,
    formState6,
    slideleft],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterPaginationComponent implements OnInit, OnDestroy {

  visible:boolean = true;
  changetype:boolean = true;
  viewpass(){
    this.visible = !this.visible
    this.changetype = !this.changetype
  }
  cvisible:boolean = true;
  cchangetype:boolean = true;
  cviewpass(){
    this.cvisible = !this.cvisible
    this.cchangetype = !this.cchangetype
  }

  registerForm!:FormGroup

  state = 'info1';
  toggle() {
    this.state = this.state == 'info1'?'info2':'info3';
  }
  
  toggle2() {
    this.state = this.state == 'info3'?'info2':'info1';
  }

  get info1State() {
    return this.state == 'info1'?'show':'hide';
  }

  get info2State() {
    return this.state == 'info2'?'show':'hide';
  }
  get info3State() {
    return this.state == 'info3'?'show':'hide';
  }

  isDisplayed: boolean = true;
  toggleDiv(){
    this.isDisplayed = this.isDisplayed? false:true;
  }

  constructor(@Inject(DOCUMENT) private _document: any, private fb:FormBuilder){}

  passwordMatch(controlName: string, matchControlName: string){
    return (formGroup: FormGroup)=> {
        const control = formGroup.controls[controlName];
        const matchControl = formGroup.controls[matchControlName];
            if(matchControl.errors && !matchControl.errors['passwordMatch']){
                return;
            }
            if(control.value !== matchControl.value){
                matchControl.setErrors({passwordMatch:true});
            }else{
                matchControl.setErrors(null)
            }
    }
}

get frm(){
  return this.registerForm.controls;
}

ngOnInit() {
  this._document.body.classList.add('body');

  this.registerForm = this.fb.group({
    "name": new FormControl(null, [Validators.required]),
    
    "email": new FormControl(null, [Validators.required]),

    "pass": new FormControl(null, [Validators.required]),
    
    "cpass": new FormControl(null, [Validators.required])
  }, {
    validator: this.passwordMatch('pass', 'cpass')
  })
}

onSubmit(){
  /**
  this.registerForm.get('name')?.markAsTouched();
  
  this.registerForm.get('email')?.markAsTouched();
   */

  this.registerForm.get('pass')?.markAsTouched();
  
  this.registerForm.get('cpass')?.markAsTouched();
  
}

  ngOnDestroy() {
    this._document.body.classList.add('body');
  }

  onStrengthChange(score: any){
    console.log('new score', score);
  }

}
