import { Component, OnInit, Input } from '@angular/core';
import { Meme } from '../meme'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MemeService }  from '../meme.service';

@Component({
  selector: 'app-meme-detail',
  templateUrl: './meme-detail.component.html',
  styleUrls: ['./meme-detail.component.css']
})
export class MemeDetailComponent implements OnInit {
  @Input() meme: Meme;

  constructor(
    private route: ActivatedRoute,
    private memeService: MemeService,
    private location: Location
  ) { }

  getMeme(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.memeService.getMeme(id)
      .subscribe(meme => this.meme = meme);
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.getMeme();
  }

  save(): void {
    this.memeService.updateMeme(this.meme)
      .subscribe(() => this.goBack());
  }
}
