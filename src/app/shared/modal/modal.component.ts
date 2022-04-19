import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalId!: string;
  isModalVisible: boolean = false;

  constructor(private modalService: ModalService, private el: ElementRef) {}

  ngOnInit(): void {
    // Move the modal to the root body, independently of where it is declared, to avoid CSS inheritance issues.
    document.body.appendChild(this.el.nativeElement);

    // Subscribe to changes on the current open modal
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
