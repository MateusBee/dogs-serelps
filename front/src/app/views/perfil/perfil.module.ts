import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { PerfilRoutingModule } from './perfil-routing-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfilComponent } from './perfil.component'

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    PerfilRoutingModule,
    NgbModule.forRoot(),
  ]
})
export class PerfilModule { }
