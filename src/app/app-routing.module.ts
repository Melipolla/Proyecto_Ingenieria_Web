import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IniciadaComponent } from './pages/iniciada/iniciada.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { NuevousuarioComponent } from './pages/nuevousuario/nuevousuario.component';
import { OlvidasteComponent } from './pages/olvidaste/olvidaste.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CamionesComponent } from './pages/camiones/camiones.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sesion',component:IniciosesionComponent},
  {path:'loggeado',component:IniciadaComponent},
  {path:'olvidar',component:OlvidasteComponent},
  {path:'nuevo',component:NuevousuarioComponent},
  {path:'registrar', component:RegistroComponent},
  {path:'camiones',component:CamionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
