import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogItems = [
    {
      title: 'Mi primer blog',
      description: 'Este es un resumen de mi primer blog.',
      img: 'https://via.placeholder.com/150',
      link: 'https://www.example.com/blog/1'
    },
    {
      title: 'Mi segundo blog',
      description: 'Este es un resumen de mi segundo blog.',
      img: 'https://via.placeholder.com/150',
      link: 'https://www.example.com/blog/2'
    },
    {
      title: 'Mi primer video',
      description: 'Este es un resumen de mi primer video.',
      img: 'https://via.placeholder.com/150',
      link: 'https://www.youtube.com/watch?v=abcdefgh'
    },
    // ... más blogs y videos
  ];

  constructor() { }
  ngOnInit(): void {
  }
}
