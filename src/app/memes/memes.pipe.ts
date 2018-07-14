import { Pipe, PipeTransform } from '@angular/core';
import { union } from 'lodash';
import { Meme } from '../shared/types/meme';
import { Hub } from '../shared/types/hub';
import { Tag } from '../shared/types/tag';

@Pipe({ name: 'memeFilter' })
export class MemeFilterPipe implements PipeTransform {

    transform(allMemes: Meme[], memesOfTheDay: Meme[], filterHubs: Hub[], filterTags: Tag[], showMemesOfTheDay: boolean) {
        // memesOfTheDay.map(function (i) { return i.meme; })
        if (showMemesOfTheDay) {
            return this.filter(memesOfTheDay, filterHubs, filterTags);
        } else {
            return this.filter(allMemes, filterHubs, filterTags);
        }
    }

    filter(memes, filterHubs: Hub[], filterTags: Tag[]) {
        if (!(filterHubs.length > 0 || filterTags.length > 0)) {
            return memes;
        } else {
            let filteredMemes = [];
            if (filterHubs.length > 0) {
                filteredMemes = union(filteredMemes, memes.filter(meme => filterHubs.includes(meme.hub)));
            }
            if (filterTags.length > 0) {
                filteredMemes = union(filteredMemes, memes.filter(meme => filterTags.some(tag => meme.tags.indexOf(tag) >= 0)));
            }
            return filteredMemes;
        }
    }
}
