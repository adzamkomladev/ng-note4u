import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesComponent } from './pages/notes/notes.component';
import { NoteComponent } from './pages/note/note.component';
import { NewNoteComponent } from './pages/new-note/new-note.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: 'new-note', component: NewNoteComponent },
  { path: ':id', component: NoteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
