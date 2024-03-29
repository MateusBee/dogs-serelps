import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { ServicoComponent } from './servico.component';

const routes: Routes = [
  {
    path: '',
    component: ServicoComponent,
    data: {
      title: 'Serviços Pendentes'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule {}
