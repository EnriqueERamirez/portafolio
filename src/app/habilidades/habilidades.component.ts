import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  skillCategories = [
    {
      name: 'Lenguajes de programación',
      skills: [
        { name: 'JavaScript', percentage: 90 },
        { name: 'Python', percentage: 80 },
        // ... más lenguajes de programación
      ],
    },
    {
      name: 'Conocimientos matemáticos',
      skills: [
        { name: 'Cálculo', percentage: 70 },
        { name: 'Álgebra lineal', percentage: 85 },
        // ... más conocimientos matemáticos
      ],
    },
    {
      name: 'Metodologías de organización',
      skills: [
        { name: 'Scrum', percentage: 95 },
        { name: 'Kanban', percentage: 90 },
        // ... más metodologías de organización
      ],
    },
    // ... más categorías de habilidades
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
