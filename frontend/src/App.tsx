import AppHeader from './components/Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <AppHeader />
      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
