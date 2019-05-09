import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { PetRoutingModule } from './pet-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PetComponent } from './pet.component'

@NgModule({
  declarations: [PetComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    PetRoutingModule,
    NgbModule.forRoot(),
  ]
})
export class PetModule { }
