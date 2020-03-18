import { Injectable } from '@angular/core';
import { DATA } from '../assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getHeros() {
    return DATA.heros;
  }

  getHeroById(heroId) {
    return DATA.heros.filter((item) => {
      return item.id === heroId;
    });
  }

/*   getHeroByFileType(fileType) {
    let k = 0;
    let temp = [];
    for (let i = 0; i < DATA.heros.length; i++) {
      for (let j = 0; j < DATA.heros[i].gallery.length; j++) {
        if (DATA.heros[i].gallery[j].type === fileType) {
          temp[k] = DATA.heros[i].gallery[j];
          k++;
        }

      }
    }
    return temp;
  } */

  getGallery() {
    return DATA.gallery;
  }

  getGalleryByFileType(type) {
    return DATA.gallery.filter((item) => {
      return item.type === type;
    });
  }
  getGalleryById(id){
    return DATA.gallery.filter((item) => {
      return item.id === id;
    });
  }

  getHeroByType(Herotype) {
    return DATA.heros.filter((item) => {
      return item.type === Herotype;
    });
  }
  getEvents() {
    return DATA.events;
  }
  getEventById(eventId) {
    return DATA.events.filter((item) => {
      return item.id === eventId;
    });
  }
  getEventByType(type) {
    return DATA.events.filter((item) => {
      return item.type === type;
    });
  }

  //library
  getBooks() {
    return DATA.library;
  }
  getBookByType(type) {
    return DATA.library.filter((item) => {
      return item.type === type;
    });
  }
  getBookById(id) {
    return DATA.library.filter((item) => {
      return item.id === id;
    });
  }

  getAbout() {
    return DATA.about;
  }
  getRefrence() {
    return DATA.refrences;
  }
  getSlides() {
    return DATA.slides;
  }

}
