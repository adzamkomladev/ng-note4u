import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { listAnimation } from '../../animations/list-animation';

import { NoteService } from '../../services/note.service';

import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  animations: [listAnimation],
})
export class NotesComponent implements OnInit {
  notes: Observable<Note[]>;
  searchInput: string;

  constructor(private noteService: NoteService) {
    this.searchInput = '';
  }

  ngOnInit() {
    this.notes = this.noteService.findAll().pipe(delay(4000));
  }
}
