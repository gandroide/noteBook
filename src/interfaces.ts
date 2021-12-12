export interface INote {
  titleBook: string;
  textBook: string;
}

export interface NewNoteProps {
  note: INote;
  deleteNote(noteNameToDelete: string): void;
}
