import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-description',
  templateUrl: './page-description.component.html',
  styleUrls: ['./page-description.component.scss'],
})
export class PageDescriptionComponent implements OnInit {
  constructor() {}

  @Input('page-description')
  PageDescription: string = '';

  ngOnInit() {}
}
