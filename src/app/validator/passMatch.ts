import { FormGroup } from "@angular/forms";

export function passwordMatch(controlName: string, matchControlName: string){
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