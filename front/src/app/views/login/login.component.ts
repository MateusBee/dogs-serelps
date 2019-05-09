import {Component, ViewContainerRef} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  providers: [LoginService]
})

export class LoginComponent { 

  public user = new User();

  constructor(private loginService: LoginService,private toastr: ToastrService) {}

  Autenticar(){
      this.loginService.autenticar(this.user).subscribe(
        data => {
          const res = (data as any);
          window.localStorage.setItem('id_usuario', `${res.user.id}`);
          // this.toastr.success('Bem vindo de volta', 'Olaa!');
          res.auth ? window.location.assign("http://localhost:4200/#/home") :  this.toastr.error('Email ou senha inválido, tente novamente!', 'Oops!');
        }, 
        err => {
          this.toastr.error('Email ou senha inválido, tente novamente!', 'Oops!');
        }
      )
  }

  
}
