import { Component, OnInit } from '@angular/core';

import { DefibrilatorsDataService } from 'src/app/services/defibrilators-data.service';

@Component({
  selector: 'app-defibrilator-info-card',
  templateUrl: './defibrilator-info-card.component.html',
  styleUrls: ['./defibrilator-info-card.component.scss'],
})
export class DefibrilatorInfoCardComponent implements OnInit {
  public defibrilatorCard: any = [];

  constructor(private defibrilatorData: DefibrilatorsDataService) {
    this.defibrilatorData.getDefibrilators().subscribe((data: object) => {
      this.defibrilatorCard = data;
    });
  }

  ngOnInit() {}
}
