import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MemeFeedComponent } from './meme-feed/meme-feed.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        MemeFeedComponent

    ],
    exports: [
        ReactiveFormsModule,
        MemeFeedComponent,
        FormsModule,
        CommonModule
    ],
    providers: [],
    entryComponents: []

})
export class SharedModule {
}
