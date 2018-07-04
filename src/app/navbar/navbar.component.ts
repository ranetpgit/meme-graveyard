import { Component, OnInit } from '@angular/core';
import { UserStore } from '../core/user.store';
import { UserAccount } from '../shared/types/user-account';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from '../shared/modals/login-modal/login-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor(private userStore: UserStore, private modalService: BsModalService) { }
  public loggedInUser: UserAccount = undefined;
  bsModalRef: BsModalRef;

  ngOnInit() {
    this.subscribeLoggedInUser();
  }

  subscribeLoggedInUser() {
    this.userStore.currentUser().subscribe((res) => {
      if (typeof res.email !== 'undefined') {
        this.loggedInUser = res;
      } else {
        this.loggedInUser = undefined;
      }
    });
  }

  onSignInButtonClick() {
    this.userStore.authenticate('cars723804@mail.ee', 'kfc');
    this.bsModalRef = this.modalService.show(LoginModalComponent);
  }
  
}
