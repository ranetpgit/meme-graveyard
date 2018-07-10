import { Pipe, PipeTransform } from '@angular/core';

import { Meme } from '../shared/types/meme';
import { Hub } from '../shared/types/hub';

@Pipe({ name: 'memeFilter' })
export class MemeFilterPipe implements PipeTransform {

    transform(allMemes: Meme[], filterHubs: Hub[]) {
        if (filterHubs.length > 0) {
            return allMemes.filter(meme => filterHubs.includes(meme.hub));
        } else {
            return allMemes;
        }
    }
}
