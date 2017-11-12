import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SobreComponent } from './sobre/sobre.component';
import { BaixarComponent } from './baixar/baixar.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'sobre', component: SobreComponent},
  {path:'baixar', component:BaixarComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    SobreComponent,
    BaixarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
