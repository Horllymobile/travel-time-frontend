import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    let travels = [
      {
        id: 1,
        location: 'Munich, Germany',
        year: '2019',
        rating: 5,
        purpose: 'Holyday',
        imageUrl:'../../../assets/imgs/munich.jpeg',
        recent:false
      },
      {
        id: 2,
        location: 'Barcelona, Spain',
        year: '2015',
        rating: 5,
        purpose: 'Business',
        imageUrl: '../../../assets/imgs/barcelona-gaudi-destination-featured.jpg',
        recent: false
      },
      {
        id: 3,
        location: 'Saint Petersburg, Moscow',
        year: '2015',
        rating: 4.1,
        purpose: 'Tour',
        imageUrl: '../../../assets/imgs/saint-petersburg.jpeg',
        recent: true
      },
      {
        id: 3,
        location: 'Lagos, Nigeria',
        year: '2021',
        rating: 3.1,
        purpose: 'Tour',
        imageUrl: '../../../assets/imgs/lagos,nigeria.jpg',
        recent: true
      }
    ];
    return {travels};
  }
}
