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
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css'],
})
export class MemesComponent implements OnInit {
  memes: Meme[];
  filteredMemes: Meme[] = [];
  memesOfTheDay: Memeoday[]; // TODO
  hubs: Hub[];
  checkedHubs: Hub[] = [];
  tags: Tag[];
  checkedTags: Tag[] = [];

  private searchTerms = new Subject<string>();
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
  }

  getTags(): void {
    this.tagService.getTags().subscribe(tags => this.tags = tags);
  }

  // BAD
  initMemeSearch(): void {
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.memeService.searchMemes(term)),
    ).subscribe(foundMemes => this.filteredMemes = foundMemes);
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.getMemes();
    this.getMemesOfTheDay();
    this.getHubs();
    this.getTags();
    this.initMemeSearch();
  }
}

