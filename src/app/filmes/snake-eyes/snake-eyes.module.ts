import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnakeEyesPageRoutingModule } from './snake-eyes-routing.module';

import { SnakeEyesPage } from './snake-eyes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnakeEyesPageRoutingModule
  ],
  declarations: [SnakeEyesPage]
})
export class SnakeEyesPageModule {}
