import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ClarityModule, ClrFormsModule, ClrInputModule} from '@clr/angular';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesComponent } from './pages/notes/notes.component';

import { DateAgoPipe } from './pipes/date-ago.pipe';
import { FilterNotesPipe } from './pipes/filter-notes.pipe';
import { NoteComponent } from './pages/note/note.component';

@NgModule({
  declarations: [NotesComponent, DateAgoPipe, FilterNotesPipe, NoteComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    ClrInputModule,
    ClrFormsModule,
    ClarityModule,
  ],
})
export class NotesModule {}
