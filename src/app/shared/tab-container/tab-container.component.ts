import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css'],
})
export class TabContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit(): void {
    console.log('after called');
    // First tab in list will be the active one by default
    this.tabs.first.isActive = true;
  }

  setActive(tab: TabComponent) {
    // Set all tabs to not active
    this.tabs.forEach((tab) => {
      tab.isActive = false;
    });
    // Set the selected tab to active
    tab.isActive = true;
  }
}
