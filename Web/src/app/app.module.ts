import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
// routes is  aconstant variable (array of routes) that is needed in the RouterModule.ForRoot
// we can add some routes inside but week the app.module as clean as possible
const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    UserModule,
    LayoutModule,   
    RouterModule.forRoot(routes)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
