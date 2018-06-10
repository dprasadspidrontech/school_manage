import { Component, OnInit } from '@angular/core';
import { ManageService } from '../../Services/manage.service';
import { TokenService } from '../../Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private Manage: ManageService,
    private Token: TokenService,
    private router: Router 
  ) { }

  public form = {
    schoolname:null,
    password:null,
    password_confirmation:null,
    email:null,
    phone:null,
    city:null,
    state:null,
    address:null
  }

  public error = [];

  onSubmit() {
    this.Manage.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile-super');
  }

  handleError(error){
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
