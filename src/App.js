import './App.css';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import { Header } from './components/Header';
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
   </Container>
   <Card />
   </>
   </ThemeProvider>
  );
}

export default App;
