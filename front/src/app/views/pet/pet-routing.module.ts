import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { PetComponent } from './pet.component';

const routes: Routes = [
  {
    path: '',
    component: PetComponent,
    data: {
      title: 'Pets'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule {}
