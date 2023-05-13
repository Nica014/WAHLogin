import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class RegisterComponent implements OnInit, OnDestroy  {
  
  
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

  constructor(@Inject(DOCUMENT) private _document: any, private fb:FormBuilder){
    
  }

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