import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Modal {
  id: string;
  isOpen: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private currentOpenModal = new BehaviorSubject<string>('');

  openModal(id: string): void {
    this.currentOpenModal.next(id);
    console.log('open modal');
  }

  closeModal(): void {
    this.currentOpenModal.next('');
  }

  getCurrentOpenModal(): BehaviorSubject<string> {
    return this.currentOpenModal;
  }
}
