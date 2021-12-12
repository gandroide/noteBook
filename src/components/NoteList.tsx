import { Button } from '@mui/material';
import React from 'react';
import { NewNoteProps } from '../interfaces';
import { Notes, NotesContainer, TitleNote } from '../styles/Container.styles';

export const NoteList = ({ note, deleteNote }: NewNoteProps) => {
  return (
    <NotesContainer>
      <Notes>
        <TitleNote>{note.titleBook}</TitleNote>
        <span>{note.textBook}</span>
      </Notes>
      <Button
        onClick={() => {
          deleteNote(note.titleBook);
        }}
        color="error"
      >
        X
      </Button>
    </NotesContainer>
  );
};
