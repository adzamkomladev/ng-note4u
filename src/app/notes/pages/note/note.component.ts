import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { concatMap, delay, take } from 'rxjs/operators';

import { NotesService } from '../../services/notes.service';

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
    private notesService: NotesService,
  ) {
    this.opened = false;
  }

  ngOnInit() {
    this.note = this.route.paramMap.pipe(
      concatMap(paramMap => this.notesService.findById(+paramMap.get('id'))),
      delay(1000),
    );
  }

  onConfirmDelete(): void {
    this.opened = true;
  }

  onDelete(): void {
    this.note
      .pipe(concatMap(note => this.notesService.delete(note.id)))
      .pipe(take(1))
      .toPromise()
      .then(_ => {
        this.opened = false;

        this.router.navigate(['/notes']);
      });
  }

  onCancel(): void {
    this.opened = false;
  }
}
