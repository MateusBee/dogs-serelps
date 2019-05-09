import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [RegisterService]
})
export class PerfilComponent implements OnInit {

  public user = new User();
  constructor(private registerService: RegisterService, private toastr: ToastrService) { }

  getUser(){
    this.registerService.getUser(localStorage.getItem('id_usuario')).subscribe(
      data => {
        const resp = (data as any);
        this.user = resp
      }, err =>{
        console.log(err);
      }
    )
  }

  updateUser(){
    this.registerService.update(this.user).subscribe(
      () => {
        this.toastr.success('Dados Atualizados com Sucesso','Nice')
      }, err =>{
        console.log(err);
      }
    )
  }

  ngOnInit() {
    this.getUser()
  }

}
