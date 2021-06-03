import { Component, Input, OnInit } from '@angular/core';
import { Carddata } from 'src/app/models/carddata';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData:Carddata = new Carddata;

  constructor() { }

  ngOnInit(): void {
  }

}
