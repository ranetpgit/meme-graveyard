import { Component, OnInit } from '@angular/core';
import { Meme } from '../shared/types/meme';
import { Memeoday } from '../shared/types/memeoday';
import { Hub } from '../shared/types/hub';
import { Tag } from '../shared/types/tag';
import { MemeService } from '../core/meme.service';
import { HubService } from '../core/hub.service';
import { TagService } from '../core/tag.service';
import { UserService } from '../core/user.service';
import { AppConstants } from '../app.constants';
import { MemeFilterPipe } from './memes.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css'],
})
export class MemesComponent implements OnInit {
  memes: Meme[];
  filteredMemes: Meme[] = [];

  hubs: Hub[];
  filteredHubs: Hub[];
  checkedHubs: Hub[] = [];

  tags: Tag[];
  filteredTags: Tag[];
  checkedTags: Tag[] = [];

  memesOfTheDay: Memeoday[]; // TODO

  memeFilterPipe = new MemeFilterPipe();
  private sidebar_opened = true;

  constructor(private memeService: MemeService, private hubService: HubService, private tagService: TagService) { }

  private _toggleSidebar() {
    this.sidebar_opened = !this.sidebar_opened;
  }

  toggleHub(hub: Hub): void {
    if (!this.checkedHubs.includes(hub)) {
      this.checkedHubs.push(hub);
    } else {
      this.checkedHubs.splice(this.checkedHubs.indexOf(hub, 0), 1);
    }
    this.filterMemes();
  }

  toggleTag(tag: Tag): void {
    if (!this.checkedTags.includes(tag)) {
      this.checkedTags.push(tag);
    } else {
      this.checkedTags.splice(this.checkedTags.indexOf(tag, 0), 1);
    }
    this.filterMemes();
  }

  filterMemes(): void {
    this.filteredMemes = this.memeFilterPipe.transform(this.memes, this.checkedHubs, this.checkedTags);
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
    this.filteredHubs = this.hubs;
  }

  getTags(): void {
    this.tagService.getTags().subscribe(tags => this.tags = tags);
    this.filteredTags = this.tags;
  }

  receiveMemeSearch(event) {
    this.filteredMemes = event;
  }

  receiveTagSearch(event) {
    this.filteredTags = event;
  }

  receiveHubSearch(event) {
    this.filteredHubs = event;
  }

  ngOnInit() {
    this.getMemes();
    this.getMemesOfTheDay();
    this.getHubs();
    this.getTags();
  }
}

