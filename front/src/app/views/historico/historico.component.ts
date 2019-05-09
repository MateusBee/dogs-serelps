import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  public filtro = "";
  public tipoContratar = false;

  constructor() { }

  changeTypeService(){
    if(this.tipoContratar){
        this.tipoContratar = false;
        document.getElementById('inside').innerHTML = 'Serviços Oferecidos';
        document.getElementById('out').innerHTML = 'Serviços Contratados';
      
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
      document.getElementById('inside').innerHTML = 'Serviços Contratados';
      document.getElementById('out').innerHTML =  'Serviços Oferecidos';
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

  ngOnInit() {
  }

}
