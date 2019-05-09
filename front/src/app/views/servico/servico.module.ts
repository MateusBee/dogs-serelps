import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServicoComponent } from './servico.component'
import { ServicoRoutingModule} from './servico-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [ServicoComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ServicoRoutingModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot()
  ]
})
export class ServicoModule { }
