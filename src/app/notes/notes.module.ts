import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClrFormsModule, ClrInputModule } from '@clr/angular';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesComponent } from './pages/notes/notes.component';

import { DateAgoPipe } from './pipes/date-ago.pipe';
import { FilterNotesPipe } from './pipes/filter-notes.pipe';

@NgModule({
  declarations: [NotesComponent, DateAgoPipe, FilterNotesPipe],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    ClrInputModule,
    ClrFormsModule,
  ],
})
export class NotesModule {}
