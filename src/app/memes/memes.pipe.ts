import { Pipe, PipeTransform } from '@angular/core';

import { Meme } from '../shared/types/meme';
import { Hub } from '../shared/types/hub';

@Pipe({ name: 'filteredMemes' })
export class FilteredMemesPipe implements PipeTransform {

    transform(allMemes: Meme[], filterHubs: Hub[]) {
        debugger;
        return allMemes.filter(meme => filterHubs.includes(meme.hub));
    }
}
