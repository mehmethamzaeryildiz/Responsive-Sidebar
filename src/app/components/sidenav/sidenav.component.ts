import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidenav',
    imports: [RouterModule],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  collapsed: boolean = false;
  navData = navbarData;
}
