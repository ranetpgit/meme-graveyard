import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
    ],
    declarations: [
        LoginModalComponent
    ],
    exports: [
        ReactiveFormsModule,
        LoginModalComponent,
        FormsModule,
        ModalModule,
        CommonModule
    ],
    providers: [],
    entryComponents: [LoginModalComponent]

})
export class SharedModule {
}
