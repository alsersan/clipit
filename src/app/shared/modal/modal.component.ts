import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalId!: string;
  isModalVisible: boolean = false;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.getCurrentOpenModal().subscribe((value) => {
      console.log('Subscribe to modal called');
      this.modalId === value
        ? (this.isModalVisible = true)
        : (this.isModalVisible = false);
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
