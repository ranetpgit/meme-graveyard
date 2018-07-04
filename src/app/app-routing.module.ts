import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemeDetailComponent } from './meme-detail/meme-detail.component';
import { LandingPageComponent }   from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'detail/:id', component: MemeDetailComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
