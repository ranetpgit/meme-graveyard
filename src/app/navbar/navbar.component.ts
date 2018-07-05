import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserStore } from '../core/user.store';
import { UserAccount } from '../shared/types/user-account';
import { ModalHandlerService } from '../core/modal-handler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(private userStore: UserStore, private modaHandlerService: ModalHandlerService) { }
  public loggedInUser: UserAccount = undefined;

  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
  }


  ngOnInit() {
    this.subscribeLoggedInUser();
  }

  subscribeLoggedInUser() {
    this.subscription = this.userStore.currentUser().subscribe((res) => {
      if (typeof res !== 'undefined' && typeof res.email !== 'undefined') {
        console.log(res);
        this.loggedInUser = res;
      } else {
        this.loggedInUser = undefined;
      }
    });
  }

  onSignInButtonClick() {
    // this.userStore.authenticate('cars723804@mail.ee', 'kfc');
    this.modaHandlerService.openLoginModal();
  }

}
