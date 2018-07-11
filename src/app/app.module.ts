import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { MemeDetailComponent } from './meme-detail/meme-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MemeDetailComponent,
    ProfilePageComponent,
  ],
  imports: [
    FormsModule,
    NavbarModule,
    BrowserModule,
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
