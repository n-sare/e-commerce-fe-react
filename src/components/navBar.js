import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropDown"
import { useDispatch, useSelector } from "react-redux";
import {logoutUser} from "../store/actions/userActions"

function NavbarComponent() {
  const userData = useSelector(state => state.user);
  const {isLoggedIn, user} = userData
  console.log(user)
  const dispatch = useDispatch();
  const handleLogout =(event)=>{
    event.preventDefault();
    dispatch(logoutUser());
  }
  return (

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Container>
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Kategoriler" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Kadın Giyim</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Erkek Giyim</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Elektronik</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Hediyelik Eşya</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets" >More deets</Nav.Link>
      {isLoggedIn ? <NavDropdown title="Kullanıcı" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/login">Profil</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>Çıkış yap</NavDropdown.Item>
      </NavDropdown>: <NavDropdown title="Kullanıcı" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/login">Giriş yap</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/signup" >Üye ol</NavDropdown.Item>
      </NavDropdown>}
      
    </Nav>
  </Navbar.Collapse>
  <Navbar.Brand href="#home">
  <img
          alt=""
          src="/cart2.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        ></img>
        <span class="badge badge-pill badge-danger">1</span>
        </Navbar.Brand>
  </Container>
 
</Navbar>
  );
}

export default NavbarComponent;
