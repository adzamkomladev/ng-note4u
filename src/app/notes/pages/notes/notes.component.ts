import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { listAnimation } from '../../animations/list-animation';

import { NotesService } from '../../services/notes.service';

import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  animations: [listAnimation],
})
export class NotesComponent implements OnInit {
  notes: Observable<Note[]>;

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notes = this.notesService.findAll().pipe(delay(4000));
  }
}
