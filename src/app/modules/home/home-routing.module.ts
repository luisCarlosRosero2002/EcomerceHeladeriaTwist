import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'',
    children:[
      {
        path:'productos',
        loadChildren: () => import('../productos/productos.module').then(m => m.ProductosModule)
      },
      {
        path:'login',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
      },
      {
        path:'perfil',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
