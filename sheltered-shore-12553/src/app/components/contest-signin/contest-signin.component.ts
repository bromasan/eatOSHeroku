import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-contest-signin',
  templateUrl: './contest-signin.component.html',
  styleUrls: ['./contest-signin.component.css']
})
export class ContestSigninComponent implements OnInit {
  submitted = false;
  userForm : FormGroup;


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })
  }

  get myForm(){
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (!this.userForm.valid) {
      return false;
    } else {
      this.apiService.signInUser(this.userForm.value).subscribe(
        (res) => {
          this.apiService.setId(res._id);

          
          this.ngZone.run(() => this.router.navigateByUrl('/contest-begin'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
