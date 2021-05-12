import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BoxContainerComponent } from './box-container/box-container.component';
import { MatButtonModule, MatSlideToggleModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [HomeComponent, BoxContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule
  ]
})
export class HomeModule { }
