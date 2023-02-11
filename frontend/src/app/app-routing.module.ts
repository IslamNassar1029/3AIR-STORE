import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { ProductsDashboardComponent } from './componets/products-dashboard/products-dashboard.component';
import { ProductsDetailsComponent } from './componets/products-details/products-details.component';
import { ProductsFormComponent } from './componets/products-form/products-form.component';
import { ProductsComponent } from './componets/products/products.component';
import { UserDetailsComponent } from './componets/user-details/user-details.component';
import { UserFormComponent } from './componets/user-form/user-form.component';
import { UserLoginComponent } from './componets/user-login/user-login.component';
import { UsersComponent } from './componets/users/users.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '' , component : HomeComponent},
  {path: 'users' , component : UsersComponent},//edited remove it
  {path: 'users/register' , component : UserFormComponent},//register
  {path: 'users/login' , component : UserLoginComponent},//login
  {path: 'userDetails/:id' , component : UserDetailsComponent},// remove it
  {path: 'products', component : ProductsComponent},
  {path: 'products/new' , component : ProductsFormComponent},
  {path: 'products/:id' , component : ProductsFormComponent},
  {path: 'productsDashboard' , component : ProductsDashboardComponent},
  {path: 'productsDetails/:id' , component : ProductsDetailsComponent},
  {path: '**' , component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
