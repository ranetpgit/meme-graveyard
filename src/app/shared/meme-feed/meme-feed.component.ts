import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Meme } from '../../shared/types/meme';
import { MemeService } from '../../core/meme.service';
import { MemeStore } from '../../core/meme.store';

@Component({
  selector: 'app-meme-feed',
  templateUrl: './meme-feed.component.html',
  styleUrls: ['./meme-feed.component.css']
})
export class MemeFeedComponent implements OnInit {
  dividers: string[] = [];
  memes: Meme[];
  createDivider: boolean;
  //dont need store rn but maybe in the future, when you want to interact with the meme
  constructor(private memeService: MemeService, private memeStore: MemeStore) { }

  ngOnInit() {
    this.getInitialData();
    this.memes.forEach(element => {
      let temp = new Date(element.date);
      this.addItemToList(temp.getFullYear() + " " + temp.toLocaleString('en-us', { month: 'long' }))
    });
  }

  /*private makeMonths() {
    var now = new Date();
    for (var d = new Date(2016, 1, 1); now >= d; now.setMonth(now.getMonth() - 1)) {
      this.months.push(now.toDateString());
    }
  }*/

  public addItemToList(memeDate: string): boolean {
    console.log(memeDate)
    if (!this.dividers.includes(memeDate)) {
      this.dividers.push(memeDate);
      return true;
    }
    return false;
  }

  public checkDate(memeDate: string): boolean {
    if (this.dividers.includes(memeDate)) {
      this.dividers.splice(this.dividers.indexOf(memeDate, 0), 1);
      console.log(this.dividers)
      return true;
    } else {
      return false;
    }

  }

  private getInitialData() {
    this.memeService.getAll().subscribe((response) => {
      this.memes = response;
    });
  }

}
