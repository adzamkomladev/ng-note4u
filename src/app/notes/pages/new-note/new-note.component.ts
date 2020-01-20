import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { take, tap } from 'rxjs/operators';

import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
})
export class NewNoteComponent {
  title: string;
  body: string;

  constructor(private router: Router, private notesService: NotesService) {
    this.title = this.body = '';
  }

  onSubmit(): void {
    this.notesService
      .create({ title: this.title, body: this.body })
      .pipe(
        take(1),
        tap(_ => this.router.navigate(['/notes'])),
      )
      .subscribe();
  }
}
