import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ForkComponent } from './fork/fork.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'fork/:choiceNumber',
    component: ForkComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
