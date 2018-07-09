import { Component, OnInit } from '@angular/core';
import { Meme } from '../shared/types/meme';
import { Hub } from '../shared/types/hub';
import { MemeService } from '../core/meme.service';
import { HubService } from '../core/hub.service';
import { UserService } from '../core/user.service';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {
  memes: Meme[];
  memesOfTheDay: Meme[];
  hubs: Hub[];
  tags = Object.values(AppConstants.TAGS);

  private sidebar_opened = true;

  constructor(private memeService: MemeService, private hubService: HubService) { }

  private _toggleSidebar() {
    this.sidebar_opened = !this.sidebar_opened;
  }

  getMemes(): void {
    this.memeService.getMemes().subscribe(memes => this.memes = memes);
  }

  getMemesOfTheDay(): void {
    this.memeService.getMemesOfTheDay().subscribe(memesOfTheDay => this.memesOfTheDay = memesOfTheDay);
  }

  getHubs(): void {
    this.hubService.getHubs().subscribe(hubs => this.hubs = hubs);
  }

  ngOnInit() {
    this.getMemes();
    this.getMemesOfTheDay();
    this.getHubs();
  }
}

