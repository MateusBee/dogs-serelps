import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { EnderecoComponent } from './endereco.component';

const routes: Routes = [
  {
    path: '',
    component: EnderecoComponent,
    data: {
      title: 'Endereços'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecoRoutingModule {}
