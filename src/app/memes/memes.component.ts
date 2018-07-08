import { Component, OnInit } from '@angular/core';
import { Meme } from '../shared/types//meme';
import { MemeService } from '../core/meme.service';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {
  memes: Meme[];
  memesOfTheDay: Meme[];
  private sidebar_opened = true;
  tags = Object.values(AppConstants.TAGS);
  constructor(private memeService: MemeService) { }

  private _toggleSidebar() {
    this.sidebar_opened = !this.sidebar_opened;
  }

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

