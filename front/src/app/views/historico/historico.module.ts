import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HistoricoRoutingModule } from './historico-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HistoricoComponent } from './historico.component'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [HistoricoComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    HistoricoRoutingModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot()
  ]
})
export class HistoricoModule { }
