import { Pipe, PipeTransform } from '@angular/core';
import { union } from 'lodash';
import { Meme } from '../shared/types/meme';
import { Hub } from '../shared/types/hub';
import { Tag } from '../shared/types/tag';
import * as moment from 'moment';

@Pipe({ name: 'memeFilter' })
export class MemeFilterPipe implements PipeTransform {

    transform(allMemes: Meme[], memesOfTheDay: Meme[], filterHubs: Hub[], filterTags: Tag[], showMemesOfTheDay: boolean, selectedTrend: string, selectedTime: string) {
        let filteredMemes = allMemes;
        if (showMemesOfTheDay) {
            memesOfTheDay = this.filterByTime(memesOfTheDay, selectedTime);
            memesOfTheDay = this.sortByTrend(memesOfTheDay, selectedTrend);
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
                filteredMemes.sort(function (a, b) { return +moment(b.date_submitted) - +moment(a.date_submitted); });
                break;
            }
            case 'old': {
                filteredMemes.sort(function (a, b) { return +moment(a.date_submitted) - +moment(b.date_submitted); });
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
        const currentDate = moment();
        let startingDate = moment();
        switch (selectedTime) {
            case 'day': {
                startingDate.subtract(1, 'day');
                filteredMemes = filteredMemes.filter(meme => moment(meme.date_submitted).isBetween(startingDate, currentDate));
                break;
            }
            case 'week': {
                startingDate.subtract(1, 'week');
                filteredMemes = filteredMemes.filter(meme => moment(meme.date_submitted).isBetween(startingDate, currentDate));
                break;
            }
            case 'month': {
                startingDate.subtract(1, 'month');
                filteredMemes = filteredMemes.filter(meme => moment(meme.date_submitted).isBetween(startingDate, currentDate));
                break;
            }
            case '3months': {
                startingDate.subtract(3, 'month');
                filteredMemes = filteredMemes.filter(meme => moment(meme.date_submitted).isBetween(startingDate, currentDate));
                break;
            }
            case '6months': {
                startingDate.subtract(6, 'month');
                filteredMemes = filteredMemes.filter(meme => moment(meme.date_submitted).isBetween(startingDate, currentDate));
                break;
            }
            case 'year': {
                startingDate.subtract(1, 'year');
                filteredMemes = filteredMemes.filter(meme => moment(meme.date_submitted).isBetween(startingDate, currentDate));
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
