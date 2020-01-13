import { Pipe, PipeTransform } from '@angular/core';

import { Note } from '../interfaces/note';

@Pipe({
  name: 'filterNotes',
})
export class FilterNotesPipe implements PipeTransform {
  transform(value: Note[], searchText: string): any {
    return searchText
      ? value.filter(
          note =>
            note.body.toLowerCase().includes(searchText.toLowerCase()) ||
            note.title.toLowerCase().includes(searchText.toLowerCase()),
        )
      : value;
  }
}
