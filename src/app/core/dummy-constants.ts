<<<<<<< HEAD
import { UserAccount } from '../shared/types/user-account';
import * as _ from 'lodash';

export class DummyConstants {
    static readonly DUMMY_USERACCOUNTS: UserAccount[] = [

        _.create((UserAccount.prototype), {
            id: 1,
            userId: 1,
            accountName: 'AntiVaxMOvemeNT!!',
            email: 'dfuosir341@gmail.com',
            password: 'asd12'
        }),
        _.create((UserAccount.prototype), {
            id: 2,
            userId: 2,
            accountName: 'AutismSpreader',
            email: 'catlove9732@hot.ee',
            password: 'asd122'
        }),
        _.create((UserAccount.prototype), {
            id: 7,
            userId: 3,
            accountName: 'black_people',
            email: 'cars723804@mail.ee',
            password: 'kfc'
        })];

}
=======
import { Meme } from '../shared/types/meme';
import { AppConstants } from '../app.constants';

export class DummyConstants {
    static readonly DUMMY_MEMES: Meme[] = [
        { id: 1, name: 'John Cena', born: '2014-12-01', died: '2015-12-01', description: 'And his name is John Cena', tags: [AppConstants.TAGS.CELEBRITY, AppConstants.TAGS.SPORTS], image: 'https://i.imgur.com/Du7RtnV.jpg' },
        { id: 2, name: 'MLG', born: '2013-12-01', died: '2015-12-01', description: 'Montage Parodies', tags: [AppConstants.TAGS.MLG], image: 'https://i.imgur.com/6x3xozV.jpg' },
        { id: 3, name: 'Rage faces', born: '2011-12-01', died: '2013-05-01', description: 'le rage comics', tags: [AppConstants.TAGS.TROLL], image: 'https://i.imgur.com/mjlommB.png' },
        { id: 4, name: 'My Name is Jeff', born: '2014-06-04', died: '2017-05-01', description: 'My namma Jeff :)', tags: [AppConstants.TAGS.MOVIES], image: 'https://i.imgur.com/06rFkO0.jpg' },
        { id: 5, name: 'E', born: '2018-04-01', died: '2018-05-01', description: 'Lord Farquaad Markiplier', tags: [AppConstants.TAGS.MARKIPLIER, AppConstants.TAGS.SHREK], image: 'https://i.imgur.com/BeCjznL.jpg' },
        { id: 6, name: 'Burger King Foot Lettuce', born: '2018-01-01', died: '2018-03-01', tags: [AppConstants.TAGS.FOURCHAN, AppConstants.TAGS.FOOD], description: 'The last thing you\'d want in your Burger King burger', image: 'https://i.imgur.com/BqRj5yt.png' },
        { id: 7, name: 'Loss', born: '2018-01-01', died: '2018-05-01', description: '[i] i-i ii i_', tags: [AppConstants.TAGS.COMIC], image: 'https://i.imgur.com/SqiQB7v.jpg' },
        { id: 8, name: 'doge', born: '2014-12-01', died: '2014-12-01', description: 'such description', tags: [AppConstants.TAGS.ANIMALS], image: 'https://i.imgur.com/zl6yZqH.jpg' },
        { id: 9, name: 'Change My Mind', born: '2018-02-16', died: '2018-06-01', description: 'x is y, change my mind', tags: [AppConstants.TAGS.POLITICS], image: 'https://i.imgur.com/71dGzOh.jpg' },
        { id: 10, name: 'Despacito 2', born: '2018-05-01', died: '', description: 'Despacito 2 confirmed', tags: [AppConstants.TAGS.MUSIC, AppConstants.TAGS.DESPACITO], image: 'https://i.imgur.com/JaiDr5g.jpg' },
    ];

    static readonly DUMMY_MEMESOFTHEDAY: Meme[] = [
        { id: 1, name: 'John Cena', born: '2014-12-01', died: '2015-12-01', description: 'And his name is John Cena', tags: [AppConstants.TAGS.CELEBRITY, AppConstants.TAGS.SPORTS], image: 'https://i.imgur.com/Du7RtnV.jpg' },
        { id: 2, name: 'MLG', born: '2013-12-01', died: '2015-12-01', description: 'Montage Parodies', tags: [AppConstants.TAGS.MLG], image: 'https://i.imgur.com/6x3xozV.jpg' }
    ];
}

>>>>>>> master
