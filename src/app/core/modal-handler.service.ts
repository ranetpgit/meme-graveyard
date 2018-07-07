import { Injectable } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../shared/modals/login-modal-wrapper/login-modal/login-modal.component';
import { LoginModalWrapperComponent } from '../shared/modals/login-modal-wrapper/login-modal-wrapper.component';

@Injectable()
export class ModalHandlerService {

  closeResult: string;
  constructor(private modalService: NgbModal) {

  }

  public openLoginModal() {
    this.modalService.open(LoginModalWrapperComponent, { ariaLabelledBy: 'modal-basic-title' });
    /*modal.componentInstance.title = "Dialog";
    modal.componentInstance.body = "Your message";*/
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

