import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';


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

  constructor(@Inject(DOCUMENT) private _document: any){}

  ngOnInit() {
    this._document.body.classList.add('body');
  }

  ngOnDestroy() {
    this._document.body.classList.add('body');
  }

}
