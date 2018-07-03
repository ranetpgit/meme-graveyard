import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const memes = [
        { id: 1, name: 'John Cena',born: '2014-12-01', died: "2015-12-01", description: 'And his name is John Cena', image: 'https://i.imgur.com/Du7RtnV.jpg' },
        { id: 2, name: 'MLG',born: '2013-12-01', died: "2015-12-01", description: 'Montage Parodies', image: 'https://i.imgur.com/6x3xozV.jpg' },
        { id: 3, name: 'Rage faces',born: '2011-12-01', died: "2013-05-01", description: 'le rage comics', image: 'https://i.imgur.com/mjlommB.png' },
        { id: 4, name: 'My Name is Jeff',born: '2014-06-04', died: "2017-05-01", description: 'My namma Jeff :)', image: 'https://i.imgur.com/06rFkO0.jpgg' },
        { id: 5, name: 'E',born: '2018-04-01', died: "2018-05-01", description: 'Lord Farquaad Markiplier', image: 'https://i.imgur.com/BeCjznL.jpg' },
        { id: 6, name: 'Burger King Foot Lettuce',born: '2018-01-01', died: "2018-03-01", description: 'The last thing you"d want in your Burger King burger', image: 'https://i.imgur.com/BqRj5yt.png' },
        { id: 7, name: 'Loss',born: '2018-01-01', died: "2018-05-01", description: '[i] i-i ii i_', image: 'https://i.imgur.com/SqiQB7v.jpg' },
        { id: 8, name: 'doge',born: '2014-12-01', died: "2014-12-01", description: 'such description', image: 'https://i.imgur.com/zl6yZqH.jpg' },
        { id: 9, name: 'Change My Mind',born: '2018-02-16', died: "2018-06-01", description: 'x is y, change my mind', image: 'https://i.imgur.com/71dGzOh.jpg' },
        { id: 10, name: 'Despacito 2',born: '2018-05-01', died: "", description: 'Despacito 2 confirmed', image: 'https://i.imgur.com/JaiDr5g.jpg' },
    ];
    return {memes};
  }
}
