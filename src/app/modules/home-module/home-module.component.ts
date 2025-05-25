import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';

@Component({
  selector: 'app-home-module',
  imports: [
    RouterOutlet,
    SideBarComponent,
    AppBarComponent
  ],
  templateUrl: './home-module.component.html',
  styleUrl: './home-module.component.css'
})
export class HomeModuleComponent {

}
