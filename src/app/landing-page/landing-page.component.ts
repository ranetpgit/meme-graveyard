import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  memes: Meme[] = [];

  constructor(private memeService: MemeService) { }

  ngOnInit() {
    this.getMemes();
  }

  getMemes(): void {
    this.memeService.getMemes()
      .subscribe(memes => this.memes = memes.slice(1, 5));
  }

}
