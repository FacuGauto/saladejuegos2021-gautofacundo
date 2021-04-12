import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { PptijeraComponent } from './componentes/juegos/pptijera/pptijera.component';
import { TatetiComponent } from './componentes/juegos/tateti/tateti.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/login'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'quiensoy', component: QuienSoyComponent},
  {path:'tateti', component: TatetiComponent},
  {path:'pptijera', component: PptijeraComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
