import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ModalButton from './ModalButton';
import ADDICON from './ICONS/AddIcon';
import {ADDBTNVARIANT} from './CONSTANTS'

const Header = ({response_message}) => {
    return ( 
        <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">NOTES</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>          
           <ModalButton icon={<ADDICON/>} variant={ADDBTNVARIANT} title="New Note" operation="Add" response_message={response_message} />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
     );
}
 
export default Header;
