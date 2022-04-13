import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent {
  authVisible: string = '';
  constructor(public modalService: ModalService) {}

  /* ngOnInit(): void {
    this.modalService.currentOpenModal.subscribe(
      (value) => (this.authVisible = value)
    );
  } */
}
