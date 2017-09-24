import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  private frmGrp: FormGroup;

  constructor(
    private frmBld: FormBuilder
  ) {
    this.frmGrp = this.frmBld.group({
      usNm: ['', Validators.compose([
        Validators.required,
        this.custValidator
      ]), this.asyncValidate],
      pass: ['', Validators.required],
      eml: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ])]
    });
  }

  ngOnInit() {
  }

  myFrmSub() {
    console.log(this.frmGrp);
  }

  custValidator(con: AbstractControl): ValidationErrors | null {
    if (con.value.charAt(0) === 'a' || con.value.charAt(0) === 'A') {
      return null;
    }
    return { err: 'User Name must start with A or a' };
  }
  asyncValidate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (c.value.charAt(0) === 'A' || c.value.charAt(0) === 'a') {
          res(null);
        } else {
          res({ err: 'email already exists' });
        }
      }, 1500);
    });
  }
}
