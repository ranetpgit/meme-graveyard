import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { EmailValidatorDirective } from './directives/email-validator.directive';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule ,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LoginModalComponent,
        EmailValidatorDirective,
    ],
    exports: [
        EmailValidatorDirective,
        LoginModalComponent,
        ReactiveFormsModule ,
        FormsModule,
        CommonModule
    ],
    providers: [],
    entryComponents: [LoginModalComponent]

})
export class SharedModule {
}
