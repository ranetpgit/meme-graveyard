import { Pipe, PipeTransform } from '@angular/core';
import { union } from 'lodash';
import { Meme } from '../shared/types/meme';
import { Hub } from '../shared/types/hub';
import { Tag } from '../shared/types/tag';

@Pipe({ name: 'memeFilter' })
export class MemeFilterPipe implements PipeTransform {

    transform(allMemes: Meme[], filterHubs: Hub[], filterTags: Tag[]) {
        if (!(filterHubs.length > 0 || filterTags.length > 0)) {
            return allMemes;
        } else {
            let filteredMemes = [];
            if (filterHubs.length > 0) {
                filteredMemes = union(filteredMemes, allMemes.filter(meme => filterHubs.includes(meme.hub)));
            }
            if (filterTags.length > 0) {
                filteredMemes = union(filteredMemes, allMemes.filter(meme => filterTags.some(tag => meme.tags.indexOf(tag) >= 0)));
            }
            return filteredMemes;
        }
    }
}
