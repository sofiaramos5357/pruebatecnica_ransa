import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { LoginComponent } from './pages/login/login.component';

import { AuthGuard } from '../auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    FormularioLoginComponent,
    LoginComponent,
    CarouselComponent,
  ],
  imports: [
    PublicRoutingModule,
    CommonModule,
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
export class PublicModule {}
