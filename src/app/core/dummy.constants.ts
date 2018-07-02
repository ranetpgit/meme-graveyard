import * as _ from 'lodash';
import { Meme } from '../shared/types/meme';
import { AppConstants } from '../app.constants';

export class DummyConstants {
    static readonly MEMES: Meme[] = [
    _.create((Meme.prototype), {
        id:1,
        name: 'Fund Java devs to buy eyes so they could C',
        date: '2017.05.03',
        categories: [AppConstants.CATEGORIES.BORING, AppConstants.CATEGORIES.FUNNY, AppConstants.CATEGORIES.SAD],
        upvotes: 25,
        downvotes: 1,
    }),
     _.create((Meme.prototype), {
        id:2,
        name: 'xD',
        date: '2016.05.03',
        categories: [AppConstants.CATEGORIES.BORING, AppConstants.CATEGORIES.RETARDED, AppConstants.CATEGORIES.SAD],
        upvotes: 2155,
        downvotes: 233,
    }),
   _.create((Meme.prototype), {
        id:3,
        name: 'kys',
        date: '2018.05.03',
        categories: [AppConstants.CATEGORIES.BORING, AppConstants.CATEGORIES.FUNNY, AppConstants.CATEGORIES.SAD],
        upvotes: 1,
        downvotes: 1,
    }),
    _.create((Meme.prototype), {
        id:4,
        name: 'normies',
        date: '2017.06.03',
        categories: [AppConstants.CATEGORIES.BORING, AppConstants.CATEGORIES.SEXISM, AppConstants.CATEGORIES.SAD],
        upvotes: 5343,
        downvotes: 23331,
    }),
    _.create((Meme.prototype), {
        id:5,
        name: 'Internet Explorer',
        date: '2017.02.03',
        categories: [AppConstants.CATEGORIES.BORING, AppConstants.CATEGORIES.FUNNY, AppConstants.CATEGORIES.SAD],
        upvotes: 15,
        downvotes: 0,
    })
]
}
