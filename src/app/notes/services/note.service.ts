import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
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

  findAll(): Observable<Note[]> {
    return of(this.notes);
  }

  findById(id: number): Observable<Note> {
    return of(this.notes.find(note => note.id === id));
  }

  create(noteValue: { title: string; body: string }): Observable<Note> {
    const note: Note = {
      id: this.notes.length + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...noteValue,
    };

    this.notes.push(note);

    return of(note);
  }

  update(noteValue: Note): Observable<Note> {
    const note: Note = { ...noteValue };
    note.updatedAt = new Date();

    const index = this.notes.findIndex(n => n.id === note.id);

    if (index !== -1) {
      this.notes[index] = note;

      return of(this.notes[index]);
    }

    return of(null);
  }

  favour(id: number): Observable<Note> {
    const index = this.notes.findIndex(note => note.id === id);

    if (index !== -1) {
      this.notes[index].favourite = !this.notes[index].favourite;

      return of(this.notes[index]);
    }

    return of(null);
  }

  delete(id: number): Observable<void> {
    this.notes = this.notes.filter(note => note.id !== id);

    return of(null);
  }
}
