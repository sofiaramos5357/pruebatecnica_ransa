// Importación de módulos y clases necesarios desde Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importación de guardias personalizados
import { AuthGuard } from '../auth.guard';

// Importación de componentes personalizados
import { InicioAdminComponent } from './pages/inicio-admin/inicio-admin.component';

// Importación de componentes de diseño personalizados
import { Layout1Component } from '../shared/components/layouts/layout1/layout1.component';
import { Layout2Component } from '../shared/components/layouts/layout2/layout2.component';
import { RegistrarPersonaComponent } from './pages/registrar-persona/registrar-persona.component';
import { EditarPersonaComponent } from './pages/editar-persona/editar-persona.component';

// Definición de las rutas del módulo Administrador
const routes: Routes = [
  // Rutas de administrador
  {
    path: 'home',
    component: Layout1Component, // Utiliza Layout1Component como diseño
    children: [
      {
        path: 'admin',
        component: InicioAdminComponent, // Ruta para InicioAdminComponent
        canActivate: [AuthGuard], // Protege la ruta con guardias de autenticación
      },
    ],
  },

  {
    path: '',
    component: Layout2Component, // Utiliza Layout2Component como diseño
    children: [
      {
        path: 'registrarpersona',
        component: RegistrarPersonaComponent, // Ruta para CrearSolicitudComponent
        canActivate: [AuthGuard], // Protege la ruta con guardias de autenticación
      },
      {
        path: 'editarpersona/:id',
        component: EditarPersonaComponent, // Ruta para CrearSolicitudComponent
        canActivate: [AuthGuard], // Protege la ruta con guardias de autenticación
      },
    ],
  },

];

// Definición del módulo de rutas del Administrador
@NgModule({
  imports: [RouterModule.forChild(routes)], // Importa las rutas definidas anteriormente
  exports: [RouterModule], // Exporta el módulo de rutas para su uso en otros lugares
})
export class AdministradorRoutingModule {}
