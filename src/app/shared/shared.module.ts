import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { LoginModalComponent } from './modals/login-modal-wrapper/login-modal/login-modal.component';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { LoginModalWrapperComponent } from './modals/login-modal-wrapper/login-modal-wrapper.component';
import { RegisterModalComponent } from './modals/login-modal-wrapper/register-modal/register-modal.component';
import { EqualValidatorDirective } from './directives/equal-validator.directive';


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
        EqualValidatorDirective,
        LoginModalWrapperComponent,
        RegisterModalComponent,
    ],
    exports: [
        EmailValidatorDirective,
        EqualValidatorDirective,
        LoginModalWrapperComponent,
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    providers: [],
    entryComponents: [LoginModalWrapperComponent]

})
export class SharedModule {
}
