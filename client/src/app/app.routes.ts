import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from "./product/product.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { ApplicationComponent } from './application/application.component';
import { ServiceComponent } from './service/service.component';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'application',
    component: ApplicationComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
