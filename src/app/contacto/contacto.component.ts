import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
 socialMedia = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook',
      link: 'https://www.facebook.com/username',
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      link: 'https://www.twitter.com/username',
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/username',
    },
    // ... más redes sociales
  ];

  reunion = {
    name: '',
    email: '',
    date: '',
    message: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log(this.reunion);
    // Aquí puedes agregar el código para enviar el formulario a un servidor o API
    // ...
  }
}
