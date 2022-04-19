import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [ModalComponent, TabComponent],
  imports: [CommonModule],
  exports: [ModalComponent, TabComponent],
})
export class SharedModule {}
