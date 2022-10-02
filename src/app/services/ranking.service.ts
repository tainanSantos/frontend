import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ranking} from "../models/Ranking";

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private readonly _baseUrl = "https://backend-ihm-game.herokuapp.com/ranking";

  constructor(private http: HttpClient) {
  }

  public listRanking(): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(`${this._baseUrl}?_sort=points`);
  }

  public saveRanking(ranking: Ranking): Observable<Ranking>{
    return this.http.post<Ranking>(this._baseUrl, ranking);

  }

}
