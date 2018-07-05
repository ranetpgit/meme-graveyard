import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './user.service';
import { UserStore } from './user.store';
import { ModalHandlerService } from './modal-handler.service';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [],
    providers: [
        UserService,
        ModalHandlerService,
        UserStore
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
