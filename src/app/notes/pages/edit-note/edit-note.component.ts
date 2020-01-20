import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { map, switchMap, take, tap } from 'rxjs/operators';

import { NoteService } from '../../services/note.service';

import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  note: Note;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private noteService: NoteService,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        map(queryParamMap => +queryParamMap.get('id')),
        switchMap(id => this.noteService.findById(id)),
        take(1),
        tap(note => (this.note = note)),
      )
      .subscribe();
  }

  onSubmitForm(note: Note): void {
    if (note.id) {
      this.updateNote(note);
    } else {
      this.createNote(note);
    }
  }

  private createNote(note: Note): void {
    this.noteService
      .create(note)
      .pipe(
        take(1),
        tap(_ => this.router.navigate(['/notes'])),
      )
      .subscribe();
  }

  private updateNote(note: Note): void {
    this.noteService
      .update(note)
      .pipe(
        take(1),
        tap(response => {
          if (response) {
            this.router.navigate(['/notes', response.id]);
          }
        }),
      )
      .subscribe();
  }
}
