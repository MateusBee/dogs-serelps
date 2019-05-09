import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { User } from '../models/user';
import { ToastrService } from 'ngx-toastr';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [RegisterService]
})
export class HomeComponent implements OnInit {
  @ViewChild('servicoModal') public servicoModal: ModalDirective;
  
  public filtro = "";
  public tipoContratar = false;
  public users: Array<User> = [];

  constructor(private registerService: RegisterService, private toastr: ToastrService) { }

  getAll(){
    this.registerService.getUsers().subscribe(
      data => {
        this.users = (data as any);
        for(let i =0; i < this.users.length; i ++){
          let cont = 0;
          for(let j =0; j < this.users[i].Analises.length; j++){
            cont += this.users[i].Analises[j].nota
            console.log(cont);
          }
         this.users[i].nota = cont;
        }
        this.progressSet();
        console.log(this.users);
      },
      err => {
        console.log(err)
      }
    )
  }

  toastWarning(){
    this.toastr.warning('Você não tem nenhum serviço em aberto', 'Oops!');
  }

  filtrar(){
    if(this.tipoContratar){
    
    } else {
      if(this.filtro){
        this.users = this.users.filter( (s) => {
          if(s.nome === this.filtro) 
            return s
        })
        if(this.users.length === 0){
          this.toastr.warning('Não existem resultados para sua pesquisa', 'Oops!');
          this.getAll();
        }
          
      } else {
        this.getAll();
      }
    }
  }
  changeTypeService(){
    if(this.tipoContratar){
        this.tipoContratar = false;
        document.getElementById('inside').innerHTML = 'Oferecer Serviços';
        document.getElementById('out').innerHTML = 'Contratar Serviços';
      
        document.getElementById('oferecer').classList.remove('show');
        document.getElementById('oferecer').classList.add('hide');
        new Promise((resolve, reject) => {
          setTimeout(() => {document.getElementById('oferecer').style.display = 'none', resolve()}, 600);
        }).then(() => {
          document.getElementById('contratar').style.display = 'block';
          document.getElementById('contratar').classList.remove('hide');
          document.getElementById('contratar').classList.add('show');
        })
    } else {
      this.tipoContratar = true;
      document.getElementById('inside').innerHTML = 'Contratar Serviços';
      document.getElementById('out').innerHTML =  'Oferecer Serviços';
      document.getElementById('contratar').classList.remove('show');
      document.getElementById('contratar').classList.add('hide');
      new Promise((resolve, reject) => {
        setTimeout(() => {document.getElementById('contratar').style.display = 'none', resolve()}, 600);
      }).then(() => {
        document.getElementById('oferecer').style.display = 'block'
        document.getElementById('oferecer').classList.remove('hide');
        document.getElementById('oferecer').classList.add('show');
      })
    }
  }

  progressSet(){
    this.users = this.users.map( user => {
      if (user.nota < 2) {
        user.type = 'danger';
      } else if (user.nota < 3) {
        user.type  = 'warning';
      } else if (user.nota < 4) {
        user.type  = 'info';
      } else {
        user.type  = 'success';
      }
      return user
    })

    this.users = this.users.sort( function(b,a) {
      return a.nota < b.nota ? -1 : a.nota > b.nota ? 1 : 0;
    })
  }

  ngOnInit() {
    this.getAll();
  }

}
