import { Component } from '@angular/core';
import { NotificationPopoverComponent } from './components/notification-popover/notification-popover.component';
import { ProfilePopoverComponent } from './components/profile-popover/profile-popover.component';

@Component({
  selector: 'app-app-bar',
  imports: [
    NotificationPopoverComponent,
    ProfilePopoverComponent
  ],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.css'
})
export class AppBarComponent {

}
