import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AprendizService } from 'services/domain/aprendiz.service';
import { AuthService } from 'services/auth.service';
import { StorageService } from 'services/storage.service';
import { AprendizCompleto } from 'services/domain/aprendizCompleto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InstituicaoService } from 'services/domain/instituicao.service';
import { AuthInterceptorProvider } from 'interceptors/auth-interceptor';
import { ErrorInterceptorProvider } from 'interceptors/error-interceptor';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AprendizService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    AprendizCompleto ,
    InstituicaoService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
