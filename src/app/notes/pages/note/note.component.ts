import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { concatMap, delay, take, tap } from 'rxjs/operators';

import { NoteService } from '../../services/note.service';

import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  note: Observable<Note>;
  opened: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private noteService: NoteService,
  ) {
    this.opened = false;
  }

  ngOnInit() {
    this.note = this.route.paramMap.pipe(
      concatMap(paramMap => this.noteService.findById(+paramMap.get('id'))),
      delay(1000),
    );
  }

  onConfirmDelete(): void {
    this.opened = true;
  }

  onDelete(): void {
    this.note
      .pipe(
        concatMap(note => this.noteService.delete(note.id)),
        take(1),
        tap(_ => {
          this.opened = false;

          this.router.navigate(['/notes']);
        }),
      )
      .subscribe();
  }

  onCancel(): void {
    this.opened = false;
  }

  onFavour(): void {
    this.note
      .pipe(
        concatMap(note => this.noteService.favour(note.id)),
        take(1),
        tap(_ => this.router.navigate(['/notes'])),
      )
      .subscribe();
  }
}
