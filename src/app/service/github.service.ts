import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Carddata } from '../models/carddata';
import { Contributor } from '../models/contributor';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  apiUrl:string = "https://api.github.com/repos/angular/angular/contributors?"
  // contributors?page=1&per_page=25
  cardDataList$:BehaviorSubject<Carddata[]> = new BehaviorSubject<Carddata[]>([]);

  constructor(private http:HttpClient) { }

  getContributors(p:number, nr:number) {
    this.http.get<Contributor[]>(`${this.apiUrl}page${p}&per_page=${nr}`)
    .pipe(
      map(arr => arr.map(person => {return {login: person.login, avatar_url: person.avatar_url, contributions: person.contributions};}))
    )
    .subscribe(arr => this.cardDataList$.next(arr))
  }
}
