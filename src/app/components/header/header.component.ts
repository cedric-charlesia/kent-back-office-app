import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public header!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  toggleNav: boolean = false;

  toggleMenuBurger() {
    this.toggleNav = !this.toggleNav;
  }

  ngOnInit() {
    this.header = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
