import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  typesOfShoes: string[] = ['Julia'];


  constructor() { }

  ngOnInit(): void {
  }

}
