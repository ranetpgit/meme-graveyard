import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
<<<<<<< HEAD
import { UserService } from './user.service';
import { UserStore } from './user.store';
import { ModalHandlerService } from './modal-handler.service';
=======
import { MemeService } from './meme.service';
>>>>>>> master

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [],
    providers: [
<<<<<<< HEAD
        UserService,
        ModalHandlerService,
        UserStore
=======
        MemeService,
>>>>>>> master
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
