import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';

import { AuthService } from './auth.service';
import { ApiService } from './api.service';

import { PublicComponent } from './public/public.component';
import { FooterComponent } from './footer/footer.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
    ],
  declarations: [
    AppComponent,
    PublicComponent,
    FooterComponent,
    TermsComponent,
    PrivacyComponent
    ],
  bootstrap:    [ AppComponent ],
  providers: [
    AuthService,
    ApiService
    ]
})
export class AppModule { }
