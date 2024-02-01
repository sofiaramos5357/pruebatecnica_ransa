import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AuthGuard } from '../auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Layout1Component } from './components/layouts/layout1/layout1.component';
import { Layout2Component } from './components/layouts/layout2/layout2.component';
import { Layout3Component } from './components/layouts/layout3/layout3.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavpublicComponent } from './components/navpublic/navpublic.component';
import { Layout4Component } from './components/layouts/layout4/layout4.component';

@NgModule({
  declarations: [
    NavbarComponent,
    Layout1Component,
    Layout2Component,
    Layout3Component,
    FooterComponent,
    NavpublicComponent,
    Layout4Component,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NavpublicComponent,
  ],

  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
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
export class SharedModule {}
