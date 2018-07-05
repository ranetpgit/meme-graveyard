import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemeDetailComponent } from './meme-detail/meme-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'detail/:id', component: MemeDetailComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
