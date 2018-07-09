import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStore } from '../../../../core/user.store';
import { AbstractFormComponent } from '../../../abstract-form.component';
import { UserAccount } from '../../../types/user-account';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent extends AbstractFormComponent {

  @Input() id: number;
  formGroup: FormGroup;
  formUsername: string = undefined;
  formEmail: string = undefined;
  formPassword: string = undefined;
  formPasswordCheck: string = undefined;
  userAccount: UserAccount = undefined;
  duplicateName = false;
  duplicateEmail = false;
  registerComplete = false;



  constructor(public activeModal: NgbActiveModal, private userStore: UserStore) {
    super();
  }

  private assignVariables() {
    this.registerComplete=false;
    this.duplicateName = false;
    this.duplicateEmail = false;
    this.userAccount = UserAccount.new();
    this.userAccount.accountName = this.formUsername;
    this.userAccount.email = this.formEmail;
    this.userAccount.password = this.formPassword;
  }

  public submitForm() {
    this.assignVariables();
    let data = this.findDuplicateData(this.userAccount)

    if (data.length === 0) {
      this.userStore.saveMember(this.userAccount);
      this.registerComplete=true;
    } else {
      this.displayAppropriateError(data);
    }
  }

  private displayAppropriateError(data) {
    if (data[0].accountName === this.userAccount.accountName) {
      this.duplicateName = true;
    } else {
      this.duplicateEmail = true;
    }
  }

  private findDuplicateData(item: UserAccount) {
    return this.userStore.filterDatabase(acc => acc.email === item.email || acc.accountName === item.accountName);
  }

}
