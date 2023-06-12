import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { OlvidasteComponent } from './pages/olvidaste/olvidaste.component';
import { NuevousuarioComponent } from './pages/nuevousuario/nuevousuario.component';
import { IniciadaComponent } from './pages/iniciada/iniciada.component';
import { CamionesService } from './servicios/camiones.service';
import { RegistroComponent } from './pages/registro/registro.component';
import { CamionesComponent } from './pages/camiones/camiones.component';


@NgModule({
  declarations: [
    AppComponent, FooterComponent, HeaderComponent, HomeComponent, IniciosesionComponent, OlvidasteComponent, NuevousuarioComponent, IniciadaComponent, RegistroComponent, CamionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [CamionesService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
