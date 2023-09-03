import { Component } from '@angular/core';
import { Announcement } from './models/announcement.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  announcements: Announcement[] = [
    {
      title: 'Гитара Fender',
      desc: "Продаю гитару Fender",
      image: '../assets/img/cards/guitar.png',
      price: '20 000',
      location: 'Москва, Ленина, 33',
      date: '28.03.2023',
      link: 'url',
    },
    {
      title: 'Гитара Fender',
      desc: "Продаю гитару Fender",
      image: '../assets/img/cards/guitar.png',
      price: '20 000',
      location: 'Москва, Ленина, 33',
      date: '28.03.2023',
      link: 'url',
    },
    {
      title: 'Гитара Fender',
      desc: "Продаю гитару Fender",
      image: '../assets/img/cards/guitar.png',
      price: '20 000',
      location: 'Москва, Ленина, 33',
      date: '28.03.2023',
      link: 'url',
    },
    {
      title: 'Гитара Fender',
      desc: "Продаю гитару Fender",
      image: '../assets/img/cards/guitar.png',
      price: '20 000',
      location: 'Москва, Ленина, 33',
      date: '28.03.2023',
      link: 'url',
    },
    {
      title: 'Гитара Fender',
      desc: "Продаю гитару Fender",
      image: '../assets/img/cards/guitar.png',
      price: '20 000',
      location: 'Москва, Ленина, 33',
      date: '28.03.2023',
      link: 'url',
    },
    {
      title: 'Гитара Fender',
      desc: "Продаю гитару Fender",
      image: '../assets/img/cards/guitar.png',
      price: '20 000',
      location: 'Москва, Ленина, 33',
      date: '28.03.2023',
      link: 'url',
    },
    {
      title: 'Гитара Fender',
      desc: "Продаю гитару Fender",
      image: '../assets/img/cards/guitar.png',
      price: '20 000',
      location: 'Москва, Ленина, 33',
      date: '28.03.2023',
      link: 'url',
    },
    {
      title: 'Гитара Fender',
      desc: "Продаю гитару Fender",
      image: '../assets/img/cards/guitar.png',
      price: '20 000',
      location: 'Москва, Ленина, 33',
      date: '28.03.2023',
      link: 'url',
    },
    {
      title: 'Гитара Fender',
      desc: "Продаю гитару Fender",
      image: '../assets/img/cards/guitar.png',
      price: '20 000',
      location: 'Москва, Ленина, 33',
      date: '28.03.2023',
      link: 'url',
    },
    {
      title: 'Гитара Fender',
      desc: "Продаю гитару Fender",
      image: '../assets/img/cards/guitar.png',
      price: '20 000',
      location: 'Москва, Ленина, 33',
      date: '28.03.2023',
      link: 'url',
    },
    {
      title: 'Гитара Fender',
      desc: "Продаю гитару Fender",
      image: '../assets/img/cards/guitar.png',
      price: '20 000',
      location: 'Москва, Ленина, 33',
      date: '28.03.2023',
      link: 'url',
    },
  ] 
}
