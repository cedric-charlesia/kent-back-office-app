import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-navigation-menu',
  templateUrl: './header-navigation-menu.component.html',
  styleUrls: ['./header-navigation-menu.component.scss'],
})
export class HeaderNavigationMenuComponent implements OnInit {
  constructor() {}

  toggleNav: boolean = false;

  toggleMenuBurger() {
    this.toggleNav = !this.toggleNav;
  }

  ngOnInit() {}
}
