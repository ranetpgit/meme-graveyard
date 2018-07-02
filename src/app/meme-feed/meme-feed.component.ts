import { Component, OnInit } from '@angular/core';
import { Meme } from '../shared/types/meme';
import { MemeService } from '../core/meme.service';
import { MemeStore } from '../core/meme.store';

@Component({
  selector: 'app-meme-feed',
  templateUrl: './meme-feed.component.html',
  styleUrls: ['./meme-feed.component.css']
})
export class MemeFeedComponent implements OnInit {
  months: string[] = [];
  memes: Meme[];

  //dont need store rn but maybe in the future, when you want to interact with the meme
  constructor(private memeService: MemeService, private memeStore: MemeStore) { }

  ngOnInit() {
    this.getInitialData();
    this.makeMonths();
  }

  private makeMonths() {
    var now = new Date();
    for (var d = new Date(2016, 1, 1); now >= d; now.setMonth(now.getMonth() - 1)) {
      this.months.push(now.toDateString());
    }
  }

  public checkDate(month:Date,memeDate:Date):boolean{
    return month===memeDate;
  }

  private getInitialData() {
    this.memeService.getAll().subscribe((response) => {
      this.memes = response;
    });
  }

}
