import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrencyComponent} from './currency/currency.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
    {path: '', component: CurrencyComponent},
    {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
