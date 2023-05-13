import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarCComponent } from './componentes/actualizar-c/actualizar-c.component';
import { ErrorPersonalizadoCComponent } from './componentes/error-personalizado-c/error-personalizado-c.component';
import { DataServices } from './database/data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './componentes/login/login-guardian';

const appRoutes:Routes = [ // Constante array de rutas
  {path:'', component:HomeComponentComponent},
  {path: 'proyectos', component:ProjectsComponentComponent },
  {path: 'sobrenosotros', component: AboutComponentComponent },
  {path: 'contacto', component:ContactComponentComponent, canActivate:[LoginGuardian] }, // al activarse en guardian en la página es necesario estar logeado para verla.
  {path: 'actualiza/:id', component:ActualizarCComponent },
  {path: 'login', component:LoginComponent },
  {path: '**', component:ErrorPersonalizadoCComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProjectsComponentComponent,
    AboutComponentComponent,
    ContactComponentComponent,
    ActualizarCComponent,
    ErrorPersonalizadoCComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ServicioEmpleadosService, EmpleadosService, DataServices, LoginService, CookieService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
