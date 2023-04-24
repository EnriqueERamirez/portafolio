import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiences = [
    {
      company: 'Empresa 1',
      position: 'Puesto 1',
      duration: 'Enero 2019 - Diciembre 2020',
      logo: 'https://via.placeholder.com/150',
      link: 'https://www.example.com/experiencia/empresa1'
    },
    {
      company: 'Empresa 2',
      position: 'Puesto 2',
      duration: 'Enero 2021 - Diciembre 2022',
      logo: 'https://via.placeholder.com/150',
      link: 'https://www.example.com/experiencia/empresa2'
    },
    // ... más experiencias
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
