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

  constructor(private memeService: MemeService) { }

  getMemes(): void {
   this.memeService.getMemes().subscribe(memes => this.memes = memes);
  }

  ngOnInit() {
    this.getMemes();
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
