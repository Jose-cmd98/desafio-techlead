import { InewUser } from './../core/services/models/auth.model';
import { ToastrCustomService } from './../core/services/toastr/toastr-custom.service';
import { Router } from '@angular/router';
import { UserService } from './../core/services/user-service/user.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Controls
  get loginFormEmailControl(): AbstractControl { return this.loginForm.controls['email']};
  get newNameControl(): AbstractControl { return this.newUserForm.controls['name']};
  get newEmailControl(): AbstractControl { return this.newUserForm.controls['email']};
  get newPassControl(): AbstractControl { return this.newUserForm.controls['password']};
  get newPassConfirmControl(): AbstractControl { return this.newUserForm.controls['confirmpassword']};

  public loginFormScreen: string = "loginScreen";

  public loginForm!: FormGroup;
  public newUserForm!: FormGroup;


  constructor(
    private authService: UserService,
    private _fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrCustomService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.newUserForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    })
  }



  // User screens
  public newUser(): void {
    this.loginFormScreen = "newUserScreen";
  };

  public forgotPassword(): void {
    console.log('teste')
    this.loginFormScreen = "forgotPassword";
  };

  public loginScreen(): void {
    this.loginFormScreen = "loginScreen"
  }

  public login() {
    const loginValue = this.loginForm.value;
    this.authService.authenticate(loginValue).subscribe((res) => {
      this.router.navigate(['admin'])
      this.toastrService.success('Seja bem-vindo!', 'Sucesso')
    }, err => {
      console.log(err)
        this.toastrService.error('Usuário ou senha inválido', 'Erro');
    })
  }

  public createAccount() {
    const userForm: InewUser = this.newUserForm.value;
    const isAdmin: boolean = false;
    const newUserBody = {...userForm, isAdmin}
    this.authService.newUser(newUserBody).subscribe((res) => {
      this.loginFormScreen = "loginScreen";
      this.toastrService.success('Usuário cadastrado.', 'Sucesso')
    }, err => {
      this.toastrService.error(err.error.msg, 'Erro')
      console.log(err.error.msg)
    })
  }

}
