import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersEditComponent } from './suppliers-edit/suppliers-edit.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsEditComponent } from './goods-edit/goods-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SuppliersComponent,
    SuppliersEditComponent,
    GoodsListComponent,
    GoodsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
