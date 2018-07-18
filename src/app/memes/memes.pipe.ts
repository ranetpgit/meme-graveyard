import { Pipe, PipeTransform } from '@angular/core';
import { union } from 'lodash';
import { Meme } from '../shared/types/meme';
import { Hub } from '../shared/types/hub';
import { Tag } from '../shared/types/tag';

@Pipe({ name: 'memeFilter' })
export class MemeFilterPipe implements PipeTransform {

    transform(allMemes: Meme[], memesOfTheDay: Meme[], filterHubs: Hub[], filterTags: Tag[], showMemesOfTheDay: boolean, selectedTrend: string, selectedTime: string) {
        let filteredMemes = allMemes;
        if (showMemesOfTheDay) {
            return this.filter(memesOfTheDay, filterHubs, filterTags);
        } else {
            filteredMemes = this.filterByTime(filteredMemes, selectedTime);
            filteredMemes = this.sortByTrend(filteredMemes, selectedTrend);
            return this.filter(filteredMemes, filterHubs, filterTags);
        }
    }

    filter(memes, filterHubs: Hub[], filterTags: Tag[]) {
        let filteredMemes = [];
        if (!(filterHubs.length > 0 || filterTags.length > 0)) {
            return memes;
        } else {
            if (filterHubs.length > 0) {
                if (filterTags.length > 0) {
                    filteredMemes = union(filteredMemes, memes.filter(meme => filterHubs.includes(meme.hub) && filterTags.some(tag => meme.tags.indexOf(tag) >= 0)));
                } else {
                    filteredMemes = union(filteredMemes, memes.filter(meme => filterHubs.includes(meme.hub)));
                }
            } else if (filterTags.length > 0) {
                filteredMemes = union(filteredMemes, memes.filter(meme => filterTags.some(tag => meme.tags.indexOf(tag) >= 0)));
            }
            return filteredMemes;
        }
    }

    sortByTrend(filteredMemes, selectedTrend) {
        switch (selectedTrend) {
          case 'new': {
            filteredMemes.sort(function (a, b) { return +new Date(b.date_submitted) - +new Date(a.date_submitted); });
            break;
          }
          case 'top': {
            filteredMemes.sort(function (a, b) { return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes); });
            break;
          }
        }
        return filteredMemes;
      }

      filterByTime(filteredMemes, selectedTime) {
        const currentDate = new Date();
        let startingDate = new Date();
        // switch for option values, filter each case besides all
        switch (selectedTime) {
          case 'day': {
            startingDate.setDate(currentDate.getDate() - 1);
            filteredMemes = filteredMemes.filter(meme => new Date(meme.date_submitted) > startingDate && new Date(meme.date_submitted) < currentDate);
            break;
          }
          case 'week': {
            startingDate.setDate(currentDate.getDate() - 7);
            filteredMemes = filteredMemes.filter(meme => new Date(meme.date_submitted) > startingDate && new Date(meme.date_submitted) < currentDate);
            break;
          }
          case 'month': {
            startingDate.setMonth(currentDate.getMonth() - 1);
            filteredMemes = filteredMemes.filter(meme => new Date(meme.date_submitted) > startingDate && new Date(meme.date_submitted) < currentDate);
            break;
          }
          case '3months': {
            startingDate.setMonth(currentDate.getMonth() - 3);
            filteredMemes = filteredMemes.filter(meme => new Date(meme.date_submitted) > startingDate && new Date(meme.date_submitted) < currentDate);
            break;
          }
          case '6months': {
            startingDate.setMonth(currentDate.getMonth() - 6);
            filteredMemes = filteredMemes.filter(meme => new Date(meme.date_submitted) > startingDate && new Date(meme.date_submitted) < currentDate);
            break;
          }
          case 'year': {
            startingDate.setFullYear(currentDate.getFullYear() - 1);
            filteredMemes = filteredMemes.filter(meme => new Date(meme.date_submitted) > startingDate && new Date(meme.date_submitted) < currentDate);
            break;
          }
          case 'all': {
            // statements;
            break;
          }
        }
        return filteredMemes;
      }
}
