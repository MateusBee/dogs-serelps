import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { User } from '../models/user';
import { Endereco } from '../models/endereco';
import { EnderecoService } from '../services/endereco.service';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss'],
  providers: [RegisterService, EnderecoService]
})
export class EnderecoComponent implements OnInit {
  @ViewChild('editModal') public editModal: ModalDirective;
  public user = new User();
  public endereco = new Endereco();
  
  constructor(private registerService: RegisterService, private enderecoService: EnderecoService, private toastr: ToastrService) {}

  getUser(){
    this.registerService.getUser(localStorage.getItem('id_usuario')).subscribe(
      data => {
        const resp = (data as any);
        this.user = resp;
        this.endereco.id_usuario = this.user.id;
        console.log(this.user);
      },
      err => console.log(err)
    )
  }

  createEndereco(){
    this.enderecoService.create(this.endereco).subscribe(
      data =>{
        const resp = (data as any);
        this.user.Enderecos.push(resp);
        this.toastr.success("Endereço criado com sucesso", "Show");
      },
      err => console.log(err)
    )
  }

  editEnderecoModal(endereco){
    this.endereco = endereco;
    console.log(endereco);
    this.editModal.show();
  }

  clean(){
    this.endereco = new Endereco()
  }

  editEndereco(){
    this.enderecoService.update(this.endereco).subscribe(
      data => {
        this.toastr.success("Endereço editado com sucesso", "Show");
        this.editModal.hide();
      },
      err => console.log(err)
    )
  }

  deleteEndereco(endereco){

    for (const i in this.user.Enderecos) {
      if (this.user.Enderecos[i] === endereco) {
          this.enderecoService.delete(endereco).subscribe(
              data => {
                this.user.Enderecos.splice(Number(i), 1);
                  this.toastr.success('Registro Excluído com Sucesso!', 'Sucesso!');
              }, error => {
                  this.toastr.error('Um erro ocorreu, contate o Administrador!', 'Oops!');
                  console.log(error);
              }
          );
          break;
      }
    }
  }

  ngOnInit() {
    this.getUser();
  }

}
