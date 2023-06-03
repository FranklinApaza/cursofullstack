import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { RepetirDirective } from './directives/repetir.directive';
import { ListComponent } from './components/producto/list/list.component';
import { DetalleComponent } from './components/producto/detalle/detalle.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HijoComponent,
    ReversePipe,
    RepetirDirective,
    ListComponent,
    DetalleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
