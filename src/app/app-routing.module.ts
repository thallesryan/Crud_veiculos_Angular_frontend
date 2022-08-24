import { VeiculoDeleteComponent } from './components/veiculo/veiculo-delete/veiculo-delete.component';
import { VeiculoUpdateComponent } from './components/veiculo/veiculo-update/veiculo-update.component';
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
  },
  {
    path:"veiculos/update/:id",
    component: VeiculoUpdateComponent
  },
  {
    path:"veiculos/delete/:id",
    component: VeiculoDeleteComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
