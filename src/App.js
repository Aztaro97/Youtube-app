import { Container, Row} from 'react-bootstrap'
import SarchContent from './components/SarchContent'
import Footer from './components/footer'



function App() {
  return (
    <Container>
         <SarchContent />
         <Row>
            <Footer />
         </Row>
    </Container>
  );
}

export default App;
