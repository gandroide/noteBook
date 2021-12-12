import { Button, TextField } from '@mui/material';
import React, { ChangeEvent, FC, useState } from 'react';
import { INote } from '../interfaces';
import {
  FlexContainer,
  HomeContainer,
  NoteBookContainer,
} from '../styles/Container.styles';
import { NoteList } from './NoteList';

export const Home: FC = () => {
  const [titleBook, setTitleBook] = useState<string>('');
  const [textBook, setTextBook] = useState<string>('');
  const [note, setNote] = useState<INote[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'title' && event.target.value !== '') {
      setTitleBook(event.target.value);
    } else if (event.target.name === 'textBook' && event.target.value !== '') {
      setTextBook(event.target.value);
    } else {
      return alert('escribe algo');
    }
  };
  // Condicionar la funcion para que no admita valores vacios.

  const addNoteBook = (): void => {
    const newNote = { titleBook: titleBook, textBook: textBook };
    setNote([...note, newNote]);
    setTitleBook('');
    setTextBook('');
  };

  const deleteNote = (noteNameToDelete: string): void => {
    setNote(
      note.filter(note => {
        return note.titleBook != noteNameToDelete;
      }),
    );
  };

  return (
    <>
      <HomeContainer>
        <NoteBookContainer>
          <h3>Note Book</h3>
          <FlexContainer>
            <TextField
              id="filled-multiline-static"
              name="title"
              label="Title"
              placeholder="title for neew note"
              value={titleBook}
              variant="filled"
              style={{ backgroundColor: 'white' }}
              onChange={handleChange}
            />
          </FlexContainer>
          <FlexContainer>
            <TextField
              id="filled-multiline-static2"
              label="Note"
              name="textBook"
              multiline
              value={textBook}
              rows={4}
              placeholder="write here"
              variant="filled"
              style={{ backgroundColor: 'white' }}
              onChange={handleChange}
            />
            <Button onClick={addNoteBook}>Send</Button>
          </FlexContainer>
        </NoteBookContainer>
        <NoteBookContainer>
          <h3>Notes</h3>
          {note.map((note: INote, key: number) => {
            return <NoteList key={key} note={note} deleteNote={deleteNote} />;
          })}
        </NoteBookContainer>
      </HomeContainer>
    </>
  );
};
