import { UserAccount } from '../shared/types/user-account';
import * as _ from 'lodash';
import { Meme } from '../shared/types/meme';
import { Memeoday } from '../shared/types/memeoday';
import { Hub } from '../shared/types/hub';
import { Tag } from '../shared/types/tag';
import { AppConstants } from '../app.constants';


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


    static readonly DUMMY_TAGS: Tag[] = [
        { id: 1, name: 'General', date_created: '2018-07-08', num_posts: 112,  creator: DummyConstants.DUMMY_USERACCOUNTS[2] },
        { id: 2, name: 'Movies', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[0] },
        { id: 3, name: 'Sad', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[1] },
        { id: 4, name: 'Celebrity', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[1] },
        { id: 5, name: 'Mlg', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[2] },
        { id: 6, name: 'Troll', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[2] },
        { id: 7, name: 'Youtuber', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[2] },
        { id: 8, name: 'Markiplier', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[2] },
        { id: 9, name: 'Shrek', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[2] },
        { id: 10, name: 'Comic', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[2] },
        { id: 11, name: 'Animals', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[0] },
        { id: 12, name: '4chan', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[0] },
        { id: 13, name: 'Politics', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[2] },
        { id: 14, name: 'Music', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[0] },
        { id: 15, name: 'Despacito', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[2] },
        { id: 16, name: 'Sports', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[2] },
        { id: 17, name: 'Food', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[2] },
        { id: 18, name: 'Sexism', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[0] },
        { id: 19, name: 'Nature', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[2] },
        { id: 20, name: 'Surreal', date_created: '2018-07-08', num_posts: 112, creator: DummyConstants.DUMMY_USERACCOUNTS[1] },
    ];

    static readonly DUMMY_HUBS: Hub[] = [
        { id: 1, name: 'General', date_created: '2018-07-08', description: 'General', tags: [DummyConstants.DUMMY_TAGS[5]], num_followers: 3456, num_posts: 211, creator: DummyConstants.DUMMY_USERACCOUNTS[2], admins: [DummyConstants.DUMMY_USERACCOUNTS[1], DummyConstants.DUMMY_USERACCOUNTS[1]]  },
        { id: 2, name: 'Nature', date_created: '2018-07-08', description: 'Nature image memes haha', tags: [DummyConstants.DUMMY_TAGS[5]], num_followers: 11345, num_posts: 389, creator: DummyConstants.DUMMY_USERACCOUNTS[1], admins: [DummyConstants.DUMMY_USERACCOUNTS[2], DummyConstants.DUMMY_USERACCOUNTS[0]] },
        { id: 3, name: 'Surreal', date_created: '2018-07-8', description: 'Surreal memes', tags: [DummyConstants.DUMMY_TAGS[5]], num_followers: 3456, num_posts: 211, creator: DummyConstants.DUMMY_USERACCOUNTS[2], admins: [DummyConstants.DUMMY_USERACCOUNTS[1], DummyConstants.DUMMY_USERACCOUNTS[1]]  },
    ];
    static readonly DUMMY_MEMES: Meme[] = [
        { id: 1, name: 'John Cena', born: '2014-12-01', died: '2015-12-01', description: 'And his name is John Cena', tags: [DummyConstants.DUMMY_TAGS[3], DummyConstants.DUMMY_TAGS[15]], image: 'https://i.imgur.com/Du7RtnV.jpg', creator: DummyConstants.DUMMY_USERACCOUNTS[1], date_created: '2018-03-18', hub: DummyConstants.DUMMY_HUBS[0]},
        { id: 2, name: 'MLG', born: '2013-12-01', died: '2015-12-01', description: 'Montage Parodies', tags: [DummyConstants.DUMMY_TAGS[4]], image: 'https://i.imgur.com/6x3xozV.jpg', creator: DummyConstants.DUMMY_USERACCOUNTS[2] , date_created: '2018-03-20', hub: DummyConstants.DUMMY_HUBS[0]},
        { id: 3, name: 'Rage faces', born: '2011-12-01', died: '2013-05-01', description: 'le rage comics', tags: [DummyConstants.DUMMY_TAGS[0], DummyConstants.DUMMY_TAGS[9]], image: 'https://i.imgur.com/mjlommB.png', creator: DummyConstants.DUMMY_USERACCOUNTS[1] , date_created: '2018-05-22', hub: DummyConstants.DUMMY_HUBS[0]},
        { id: 4, name: 'My Name is Jeff', born: '2014-06-04', died: '2017-05-01', description: 'My namma Jeff :)', tags: [DummyConstants.DUMMY_TAGS[1]], image: 'https://i.imgur.com/06rFkO0.jpg', creator: DummyConstants.DUMMY_USERACCOUNTS[2] , date_created: '2018-06-08', hub: DummyConstants.DUMMY_HUBS[0]},
        { id: 5, name: 'E', born: '2018-04-01', died: '2018-05-01', description: 'Lord Farquaad Markiplier', tags: [DummyConstants.DUMMY_TAGS[7], DummyConstants.DUMMY_TAGS[6], DummyConstants.DUMMY_TAGS[8]], image: 'https://i.imgur.com/BeCjznL.jpg', creator: DummyConstants.DUMMY_USERACCOUNTS[2] , date_created: '2018-07-28', hub: DummyConstants.DUMMY_HUBS[0]},
        { id: 6, name: 'Burger King Foot Lettuce', born: '2018-01-01', died: '2018-03-01', tags: [DummyConstants.DUMMY_TAGS[11], DummyConstants.DUMMY_TAGS[16]], description: 'The last thing you\'d want in your Burger King burger', image: 'https://i.imgur.com/BqRj5yt.png', creator: DummyConstants.DUMMY_USERACCOUNTS[0], date_created: '2018-08-01', hub: DummyConstants.DUMMY_HUBS[0]},
        { id: 7, name: 'Loss', born: '2018-01-01', died: '2018-05-01', description: '[i] i-i ii i_', tags: [DummyConstants.DUMMY_TAGS[9]], image: 'https://i.imgur.com/SqiQB7v.jpg', creator: DummyConstants.DUMMY_USERACCOUNTS[2] , date_created: '2019-01-16', hub: DummyConstants.DUMMY_HUBS[0]},
        { id: 8, name: 'doge', born: '2014-12-01', died: '2014-12-01', description: 'such description', tags: [DummyConstants.DUMMY_TAGS[18], DummyConstants.DUMMY_TAGS[10]], image: 'https://i.imgur.com/zl6yZqH.jpg', creator: DummyConstants.DUMMY_USERACCOUNTS[1] , date_created: '2019-04-20', hub: DummyConstants.DUMMY_HUBS[1]},
        { id: 9, name: 'Change My Mind', born: '2018-02-16', died: '2018-06-01', description: 'x is y, change my mind', tags: [DummyConstants.DUMMY_TAGS[12]], image: 'https://i.imgur.com/71dGzOh.jpg', creator: DummyConstants.DUMMY_USERACCOUNTS[2] , date_created: '2019-05-21', hub: DummyConstants.DUMMY_HUBS[0]},
        { id: 10, name: 'Despacito 2', born: '2018-05-01', died: '', description: 'Despacito 2 confirmed', tags: [DummyConstants.DUMMY_TAGS[14], DummyConstants.DUMMY_TAGS[13]], image: 'https://i.imgur.com/JaiDr5g.jpg', creator: DummyConstants.DUMMY_USERACCOUNTS[0] , date_created: '2019-02-05', hub: DummyConstants.DUMMY_HUBS[0]},
    ];

    static readonly DUMMY_MEMESODAY: Memeoday[] = [
        { id: 1, meme: DummyConstants.DUMMY_MEMES[0], date_featured: '2018-06-29'},
        { id: 2, meme: DummyConstants.DUMMY_MEMES[1], date_featured: '2018-06-30' },
    ];
}

