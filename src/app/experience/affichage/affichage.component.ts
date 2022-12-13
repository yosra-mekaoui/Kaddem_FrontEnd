import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  //input property
  @Input() totale = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
