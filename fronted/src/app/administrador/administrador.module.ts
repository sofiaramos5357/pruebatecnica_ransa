import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { TablaConfigUsuariosComponent } from './components/tabla-config-usuarios/tabla-config-usuarios.component';
import { InicioAdminComponent } from './pages/inicio-admin/inicio-admin.component';

//import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { RegistrarPersonaComponent } from './pages/registrar-persona/registrar-persona.component';
import { FormularioRegistrarPersonaComponent } from './components/formulario-registrar-persona/formulario-registrar-persona.component';
import { FormularioEditarPersonaComponent } from './components/formulario-editar-persona/formulario-editar-persona.component';
import { EditarPersonaComponent } from './pages/editar-persona/editar-persona.component';
@NgModule({
  declarations: [
    TablaConfigUsuariosComponent,
    InicioAdminComponent,
    RegistrarPersonaComponent,
    FormularioRegistrarPersonaComponent,
    FormularioEditarPersonaComponent,
    EditarPersonaComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    //BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [],
})
export class AdministradorModule {}
