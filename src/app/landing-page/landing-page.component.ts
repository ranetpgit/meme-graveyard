import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  thrivingMemes: Meme[];
  deadMemes: Meme[];
  memeOfTheDay: Meme;

  constructor(private memeService: MemeService) { }

  ngOnInit() {
    this.getMemes();
  }

  getMemes(): void {
    this.memeService.getMemes()
      .subscribe(memes => {
        this.thrivingMemes = memes.slice(1, 5);
        this.deadMemes = memes.slice(5, 9); });

    this.memeService.getMemeOfTheDay()
      .subscribe(memeOfTheDay => this.memeOfTheDay = memeOfTheDay);
  }

}
