import { Component, OnInit, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Carddata } from 'src/app/models/carddata';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // list$:Observable<Carddata[]> = this.ghservice.cardDataList$;
  // list$:Observable<Carddata[]> = new Observable;
  list$:BehaviorSubject<Carddata[]> = new BehaviorSubject<Carddata[]>([]);

  page:number = 1;

  constructor(private ghservice:GithubService) { }

  ngOnInit(): void {
    this.ghservice.getContributors(this.page, 24);
    console.log("value 1", this.list$.value);
    this.ghservice.cardDataList$.subscribe(
      data => {
        console.log("value 2", this.list$.value);
        console.log("data 2", data);
        this.list$.next([...this.list$.value, ...data])
      }
    )
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.page += 1;
      this.ghservice.getContributors(this.page, 24);
      this.ghservice.cardDataList$.subscribe(
        data => {
          console.log("value", this.list$.value);
          console.log("data", data);
          this.list$.next([...this.list$.value, ...data])
        }
      )
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }
}
