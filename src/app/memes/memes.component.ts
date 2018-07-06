import { Component, OnInit } from '@angular/core';
import { Meme } from '../shared/types//meme';
import { MemeService } from '../core/meme.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {
  memes: Meme[];
  memesOfTheDay: Meme[];

  constructor(private memeService: MemeService) { }

  getMemes(): void {
    this.memeService.getMemes().subscribe(memes => this.memes = memes);
  }

  getMemesOfTheDay(): void {
    this.memeService.getMemesOfTheDay().subscribe(memesOfTheDay => this.memesOfTheDay = memesOfTheDay);
  }

  ngOnInit() {
    this.getMemes();
    this.getMemesOfTheDay();
  }
}

