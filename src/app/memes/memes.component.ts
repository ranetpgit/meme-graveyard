import { Component, OnInit } from '@angular/core';
import { Meme } from '../shared/types/meme';
import { Hub } from '../shared/types/hub';
import { MemeService } from '../core/meme.service';
import { HubService } from '../core/hub.service';
import { UserService } from '../core/user.service';
import { AppConstants } from '../app.constants';
import { MemeFilterPipe } from './memes.pipe';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css'],
})
export class MemesComponent implements OnInit {
  memes: Meme[];
  filteredMemes: Meme[] = [];
  memesOfTheDay: Meme[]; // TODO
  hubs: Hub[];
  checkedHubs: Hub[] = [];
  tags = Object.values(AppConstants.TAGS); // TODO

  memeFilterPipe = new MemeFilterPipe();
  private sidebar_opened = true;

  constructor(private memeService: MemeService, private hubService: HubService) { }

  private _toggleSidebar() {
    this.sidebar_opened = !this.sidebar_opened;
  }

  filterHub(hub: Hub): void {
    if (!this.checkedHubs.includes(hub)) {
      this.checkedHubs.push(hub);
    } else {
      this.checkedHubs.splice(this.checkedHubs.indexOf(hub, 0), 1);
    }
    this.filterMemes();
  }

  filterMemes(): void {
    this.filteredMemes = this.memeFilterPipe.transform(this.memes, this.checkedHubs);
  }

  getMemes(): void {
    this.memeService.getMemes().subscribe(memes => this.memes = memes);
    this.filteredMemes = this.memes;
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

