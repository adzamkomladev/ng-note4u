import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent {
  @Input() note: Note;

  @Output() submitForm: EventEmitter<Note>;

  constructor() {
    this.submitForm = new EventEmitter<Note>();
  }

  onSubmit(): void {
    this.submitForm.emit(this.note);
  }
}
