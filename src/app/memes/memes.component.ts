import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {
  memes: Meme[];
  memesOfTheDay: Meme[];
  memeOfTheDay: Meme;

  constructor(private memeService: MemeService) { }

  getMemes(): void {
   this.memeService.getMemes().subscribe(memes => this.memes = memes);
  }

  getMemesOfTheDay(): void {
    this.memeService.getMemesOfTheDay().subscribe(memesOfTheDay => this.memesOfTheDay = memesOfTheDay);
  }
  getMemeOfTheDay(): void {
    this.memeService.getMemeOfTheDay().subscribe(memeOfTheDay => this.memeOfTheDay = memeOfTheDay);
  }

  ngOnInit() {
    this.getMemes();
    this.getMemesOfTheDay();
    this.getMemeOfTheDay();
  }

  add(name: string, born: string, died: string, description: string, image: string): void {
    name = name.trim();
    born = born.trim();
    died = died.trim();
    description = description.trim();
    image = image.trim();

    if (!name) { return; }
    this.memeService.addMeme({ name, born, died, description, image } as Meme)
      .subscribe(meme => {
        this.memes.push(meme);
      });
  }

  delete(meme: Meme): void {
    this.memes = this.memes.filter(h => h !== meme);
    this.memeService.deleteMeme(meme).subscribe();
  }
}
