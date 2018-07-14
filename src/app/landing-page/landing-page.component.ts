import { Component, OnInit } from '@angular/core';
import { Meme } from '../shared/types/meme';
import { Memeoday } from '../shared/types/memeoday';
import { MemeService } from '../core/meme.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  thrivingMemes: Meme[];
  deadMemes: Meme[];
  memeOfTheDay: Memeoday;

  constructor(private memeService: MemeService) { }

  ngOnInit() {
    this.getMemes();
  }

  getMemes(): void {
    this.memeService.getMemes()
      .subscribe(memes => {
        this.thrivingMemes = memes.slice(1, 5);
        this.deadMemes = memes.slice(5, 9); });

    this.memeService.getMemeoday()
      .subscribe(memeOfTheDay => this.memeOfTheDay = memeOfTheDay);
  }

}
