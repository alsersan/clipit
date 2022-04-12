import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isOpen = true;

  toggleModal() {
    this.isOpen = !this.isOpen;
  }

  isModalOpen() {
    return this.isOpen;
  }
}
