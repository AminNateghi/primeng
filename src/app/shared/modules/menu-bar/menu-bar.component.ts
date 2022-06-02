import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_ITEMS_DATA } from './menu-items.data';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  menus = MENU_ITEMS_DATA;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  goto(route: string) {
    this.router.navigate([route]);
  }
}
