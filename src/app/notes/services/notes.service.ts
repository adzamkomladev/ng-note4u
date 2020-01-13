import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes: Note[];

  constructor() {
    this.notes = [
      {
        id: 1,
        title: 'Hello world',
        body: 'This is the body',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'Hi universe',
        body: 'I love the universe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: 'Stay safe',
        body: 'I promise i will',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }

  findAll(search?: string): Observable<Note[]> {
    const filteredNotes = search
      ? this.notes.filter(
          note => note.body.includes(search) || note.title.includes(search),
        )
      : this.notes;

    return of(filteredNotes);
  }
}
