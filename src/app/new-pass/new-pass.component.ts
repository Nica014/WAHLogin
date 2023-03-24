import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewPassComponent implements OnInit, OnDestroy {
  form!: FormGroup;



  
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
  constructor(@Inject(DOCUMENT) private _document: any, private fb: FormBuilder){}

  ngOnInit() : void{
    this._document.body.classList.add('body');
    this.form = this.fb.group({
      password: ['', Validators.required],
    });
  }

  ngOnDestroy() {
    this._document.body.classList.add('body');
  }

  onStrengthChange(score: any) {
    console.log('new score', score);
  }

}
