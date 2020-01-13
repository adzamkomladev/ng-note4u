import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesComponent } from './pages/notes/notes.component';

import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [NotesComponent, DateAgoPipe],
  imports: [CommonModule, NotesRoutingModule],
})
export class NotesModule {}
