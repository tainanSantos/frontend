import {Component, OnInit} from '@angular/core';
import {Ranking} from "../models/Ranking";
import {RankingService} from "../services/ranking.service";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  rankings: Ranking[] = [];

  displayedColumns: string[] = ['points', 'name'];



  constructor(
    private rankingService: RankingService
  ) {
    this.rankingService.listRanking().subscribe(
      value => this.rankings = value
    )
  }

  ngOnInit(): void {
  }

}
