import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { HomeComponent } from './componets/home/home.component';
import { UsersComponent } from './componets/users/users.component';
import { UserFormComponent } from './componets/user-form/user-form.component';
import { UserDetailsComponent } from './componets/user-details/user-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { FooterComponent } from './componets/footer/footer.component';
import { ProductsComponent } from './componets/products/products.component';
import { ProductsItemsComponent } from './componets/products-items/products-items.component';
import { ProductsFormComponent } from './componets/products-form/products-form.component';
import { ProductsDashboardComponent } from './componets/products-dashboard/products-dashboard.component';
import { ProductsDetailsComponent } from './componets/products-details/products-details.component';
import { UserLoginComponent } from './componets/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    UserFormComponent,
    UserDetailsComponent,
    NotFoundComponent,
    FooterComponent,
    ProductsComponent,
    ProductsItemsComponent,
    ProductsFormComponent,
    ProductsDashboardComponent,
    ProductsDetailsComponent,
    UserLoginComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
