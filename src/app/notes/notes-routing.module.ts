import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesComponent } from './pages/notes/notes.component';
import { NoteComponent } from './pages/note/note.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: 'edit-note', component: EditNoteComponent },
  { path: ':id', component: NoteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
