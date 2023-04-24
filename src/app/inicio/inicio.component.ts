import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  achievements = [
    {
      title: 'Logro 1',
      description: 'Descripción breve del logro 1.',
      img: 'https://via.placeholder.com/150',
    },
    {
      title: 'Logro 2',
      description: 'Descripción breve del logro 2.',
      img: 'https://via.placeholder.com/150',
    },
    // ... más logros
  ];

  latestNews = [
    {
      title: 'Noticia 1',
      description: 'Resumen de la noticia 1.',
      date: '01/01/2023',
    },
    {
      title: 'Noticia 2',
      description: 'Resumen de la noticia 2.',
      date: '15/02/2023',
    },
    // ... más noticias
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
