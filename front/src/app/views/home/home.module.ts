import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { HomeRoutingModule } from './home-routing.module';
import { ModalModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgbModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule { }
