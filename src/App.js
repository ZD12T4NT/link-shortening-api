import './App.css';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import { Header } from './components/Header';
import { LinkInput } from './components/LinkInput';
import content from './content'
import { Card } from './components/Card';





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
    {content.map((item, index) => (
        <Card key={index} item={item} />
      ))}
   </Container>
   </>
   </ThemeProvider>
  );
}

export default App;
