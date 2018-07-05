import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MessageService } from './message.service';
import { MemeService } from './meme.service';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [],
    providers: [
        MemeService,
        MessageService,
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
