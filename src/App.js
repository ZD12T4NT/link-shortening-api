import './App.css';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { Boost } from './components/Boost';
import { Footer } from './components/Footer';






function App() {

  const theme = {
    colors: {
        header: '#fff'

    },

    mobile: '920px'

  }

  return (
    <ThemeProvider theme = {theme}>
   <>
   <Container>
    <Header />
   </Container>
   <Card />
   <Boost />
   <Footer />
   </>
   </ThemeProvider>
  );
}

export default App;
