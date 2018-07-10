import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MemeDetailComponent } from './meme-detail/meme-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { MemesComponent } from './memes/memes.component';
import { SidebarModule } from 'ng-sidebar';
import { MemeSearchComponent } from './meme-search/meme-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    MemeDetailComponent,
    MemesComponent,
    MemeSearchComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
