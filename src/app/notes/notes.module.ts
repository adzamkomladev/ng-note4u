import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { AngularEditorModule } from '@kolkov/angular-editor';

import { NotesRoutingModule } from './notes-routing.module';

import { DateAgoPipe } from './pipes/date-ago.pipe';
import { FilterNotesPipe } from './pipes/filter-notes.pipe';

import { NotesComponent } from './pages/notes/notes.component';
import { NoteComponent } from './pages/note/note.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { NoteFormComponent } from './components/note-form/note-form.component';

@NgModule({
  declarations: [
    NotesComponent,
    DateAgoPipe,
    FilterNotesPipe,
    NoteComponent,
    EditNoteComponent,
    NoteFormComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    ClarityModule,
    AngularEditorModule,
  ],
})
export class NotesModule {}
