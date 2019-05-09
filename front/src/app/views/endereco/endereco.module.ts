import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { EnderecoRoutingModule} from './endereco-routing.module'
import { EnderecoComponent } from './endereco.component';

@NgModule({
  declarations: [ EnderecoComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    EnderecoRoutingModule,
    NgbModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class EnderecoModule { }
