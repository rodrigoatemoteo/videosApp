import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnakeEyesPage } from './snake-eyes.page';

const routes: Routes = [
  {
    path: '',
    component: SnakeEyesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnakeEyesPageRoutingModule {}
