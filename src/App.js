import './App.css';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import { Header } from './components/Header';
import { LinkInput } from './components/LinkInput';




function App() {

  const theme = {
    colors: {
        header: '#fff'

    },

    mobile: '768px'

  }

  return (
    <ThemeProvider theme = {theme}>
   <>
   <Container>
    <Header />
    <LinkInput />
   </Container>
   </>
   </ThemeProvider>
  );
}

export default App;
