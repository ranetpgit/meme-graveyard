import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MemeStore } from './meme.store';
import { MemeService } from './meme.service';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [],
    providers: [
        MemeStore,
        MemeService,

    ]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
