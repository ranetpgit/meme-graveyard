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
import * as moment from 'moment';

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

  memesoday: Memeoday[];
  filteredMemesoday: Meme[];
  showMemesoday = false;

  selectedTrend = 'new';
  selectedTime = 'all';

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
    this.filteredMemes = this.memeFilterPipe.transform(this.memes, this.filteredMemesoday, this.checkedHubs, this.checkedTags, this.showMemesoday, this.selectedTrend, this.selectedTime);
  }

  getMemes(): void {
    this.memeService.getMemes().subscribe(memes => this.memes = memes);
    this.filteredMemes = this.memes;
  }

  getMemesoday(): void {
    // get Meme[] from Memeoday[]
    this.memeService.getMemesoday().subscribe(memesoday => this.memesoday = memesoday);
    this.filteredMemesoday = this.memesoday.map(function (i) { return i.meme; });
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

  receiveMemeodaySearch(event) {
    this.filteredMemesoday = event.map(function (i) { return i.meme; });
  }

  receiveTagSearch(event) {
    this.filteredTags = event;
  }

  receiveHubSearch(event) {
    this.filteredHubs = event;
  }

  selectTime(event) {
    this.selectedTime = event.target.value;
    this.filterMemes();
  }

  selectTrend(event) {
    this.selectedTrend = event.target.value;
    this.filterMemes();
  }

  howLongAgo(date: string): string {
    return moment(date).fromNow();
  }

  ngOnInit() {
    this.getMemes();
    this.getMemesoday();
    this.getHubs();
    this.getTags();
  }
}

