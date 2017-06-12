import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersEditComponent } from './suppliers-edit/suppliers-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SuppliersComponent,
    children: []
  },
  {
    path: 'suppliers',
    component: SuppliersComponent,
    children: []
  },
  {
    path: 'supplier/new',
    component: SuppliersEditComponent,
    children: []
  },
  {
    path: 'supplier/:id',
    component: SuppliersEditComponent,
    children: []
  } 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
