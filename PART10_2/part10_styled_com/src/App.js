import logo from './logo.svg';
import './App.css';
import { ButtonOne, ButtonTwo } from './components/ButtonOne';
import {Button1, Button2} from './components/StyleSample';
import styled, { ThemeProvider } from 'styled-components';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid black;
  padding: 15px;
`;

function App() {
  return (
    <ThemeProvider
      theme ={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}>
      <AppBlock>
        <div>
          <ButtonOne>오랜지색 버튼</ButtonOne>
          <ButtonTwo>초록색 버튼</ButtonTwo>
        </div>
        <div>
          <Button1 color='green' background='pink'>Green Button</Button1>
          <Button2 primary>Primarly Button</Button2>
        </div>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
