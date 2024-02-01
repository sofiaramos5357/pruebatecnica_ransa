// Importación de módulos y clases necesarios desde Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../public/pages/login/login.component';

// Importación de componentes de diseño personalizados
import { Layout3Component } from '../shared/components/layouts/layout3/layout3.component';
import { Layout4Component } from '../shared/components/layouts/layout4/layout4.component';

// Definición de las rutas de la aplicación pública
const routes: Routes = [
  {
    path: '',
    component: Layout4Component, // Utiliza Layout4Component como diseño
    children: [{ path: '', component: LoginComponent }], // Ruta raíz, muestra LoginComponent
  },

];

// Definición del módulo de rutas público
@NgModule({
  imports: [RouterModule.forChild(routes)], // Importa las rutas definidas anteriormente
  exports: [RouterModule], // Exporta el módulo de rutas para su uso en otros lugares
})
export class PublicRoutingModule {}
