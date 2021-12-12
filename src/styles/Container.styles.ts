import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5rem;
  padding-top: 1rem;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const NavLinks = styled.div`
  padding: 0 10px;
  text-decoration: none;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  margin: 10px 0px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

export const NoteBookContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NotesContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.blue.dark};
  margin: 0.5rem;
  justify-content: space-between;
`;

export const TitleNote = styled.span`
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
`;

export const Notes = styled.div`
  height: 3rem;
  display: flex;
  flex-direction: column;
`;
