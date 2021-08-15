import { Injectable } from '@angular/core';
import { Course1 } from 'src/interfaces/courses.interface';

@Injectable()
export class CoursesService {
  private _course: Course1[] = [
    {
      id: 1,
      section: '¿Que es esto?',
      content: '¿Que es esto?',
      active: 1,
    },
    {
      id: 2,
      section: 'Poniendonos listos',
      content: 'Poniendonos listos',
      active: 0,
    },
    {
      id: 3,
      section: 'Estilos vs MockUps',
      content: 'Estilos vs MockUps',
      active: 0,
    },
    {
      id: 4,
      section: 'Definición y constucción de componentes',
      content: 'Definición y constucción de componentes',
      active: 0,
    },
    {
      id: 5,
      section: 'Definición y constucción de screens',
      content: 'Definición y constucción de screens',
      active: 0,
    },
    {
      id: 6,
      section: 'Servicios',
      content: 'Servicios',
      active: 0,
    },
    {
      id: 7,
      section: 'Sesion de usuario',
      content: 'Sesion de usuario',
      active: 0,
    },
    {
      id: 8,
      section: 'Aplicacion dinamica',
      content: 'Aplicacion dinamica',
      active: 0,
    },
    {
      id: 9,
      section: '¿Que sigue de aqui?',
      content: '¿Que sigue de aqui?',
      active: 0,
    },
    {
      id: 10,
      section: 'Extra Tips',
      content: 'Extra Tips',
      active: 0,
    },
  ];

  get course(): Course1[] {
    return [...this._course];
  }

  getContent(id: number): Course1[] {
    let newContent: Course1[] = [];
    this._course.map((item) => {
      if (item.id == id) {
        newContent.push({
          id: item.id,
          section: item.section,
          content: item.content,
          active: 1,
        });
      } else {
        newContent.push({
          id: item.id,
          section: item.section,
          content: item.content,
          active: 0,
        });
      }
    });
    return newContent;
  }

  constructor() {
    console.log('Service has been started');
  }
}
