import { VeiculoCreateComponent } from './components/veiculo/veiculo-create/veiculo-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { VeiculoCrudComponent } from './views/veiculo-crud/veiculo-crud.component';

const routes: Routes = [

  {
    path: "",
    component:HomeComponent
  },
  {
    path: "veiculos",
    component: VeiculoCrudComponent
  },
  {
    path:"veiculos/create",
    component: VeiculoCreateComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
