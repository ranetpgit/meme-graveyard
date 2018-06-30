import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [

    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    providers: [],
    entryComponents: []

})
export class SharedModule {
}
