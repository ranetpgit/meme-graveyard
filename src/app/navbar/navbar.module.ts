import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar-component/navbar.component';
import { NavbarNavigationRoutingModule } from './navbar-routing.module';

@NgModule({

    imports: [
        SharedModule,
        NgbModule,
        NavbarNavigationRoutingModule,
    ],
    declarations: [
        NavbarComponent,
    ],
    exports: [
        NavbarComponent,
    ],

})
export class NavbarModule {
}
