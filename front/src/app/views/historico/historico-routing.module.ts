import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HistoricoComponent } from './historico.component';

const routes: Routes = [
  {
    path: '',
    component: HistoricoComponent,
    data: {
      title: 'Historico de Serviços'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricoRoutingModule {}
