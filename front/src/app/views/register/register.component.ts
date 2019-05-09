import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { User } from '../models/user';
import { EnderecoService } from '../services/endereco.service';
import { ToastrService } from 'ngx-toastr';
import { Endereco } from '../models/endereco';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService, EnderecoService]
})
export class RegisterComponent {

  public user = new User();
  public endereco = new Endereco();
  public verifyPass = new String;


  constructor(private registerService: RegisterService, private enderecoService: EnderecoService, private toastr: ToastrService) { }


  createUser(){
    this.registerService.create(this.user).subscribe(
      data => {
        const res = (data as any);
        this.endereco.id_usuario = res.id;
        this.enderecoService.create(this.endereco).subscribe(
          data => {
            this.toastr.success('Registro Efetuado com Sucesso', 'Show!');
            window.location.assign('http://localhost:4200/#/login')
          }, err =>{
            console.log(err);
          }
        );
      }, 
      err => {
        console.log(err);
        this.toastr.error('Verifique os campos e tente novamente!', 'Oops!');
        document.getElementsByTagName('form')[0].classList.add('was-validated');
      }
    )
  }


}
