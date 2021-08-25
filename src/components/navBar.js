import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropDown"
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/actions/userActions"
import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getUserCart } from '../store/actions/cartActions';

function NavbarComponent() {
  //we need to draw data from store, so that we can access isLoggedIn and user cart info
  const userData = useSelector(state => state.user);
  const userCart = useSelector(state => state.usercart)

  //count is to determine how many products does user have
  const [count, setCount] = useState(0);

  const { usercart } = userCart;
  const { isLoggedIn, user } = userData

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCart(user[0]?.id))
  }, [user[0]?.id])

  useEffect(() => {
    //when usercart changes (if user adds product), count should change
    //but this feature needs arrangement since it doesn't work properly
    { usercart != undefined ? setCount(usercart.length) : setCount(0) }
  }, [usercart]);

  //Log out makes isLoggedIn = false and redirects to login page
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logoutUser());
    history.push("/login")
  }

  return (

    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">

      <Link to="/"><i class="fab fa-shopware fa-3x" style={{ color: "#BD2000" }}></i></Link>
      <Navbar.Brand href="/" style={{ color: "#BD2000", fontWeight: "bold" }}>MeShop!</Navbar.Brand>

      <Container>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="text-muted">Fırsat Ürünleri</Nav.Link>
            <Nav.Link href="#pricing" className="text-muted">Favori Ürünler</Nav.Link>
            <NavDropdown title={<span className="text-muted">Kategoriler</span>} id="collasible-nav-dropdown" style={{ color: "#777" }}>
              <NavDropdown.Item href="/products/womenwear">Kadın Giyim</NavDropdown.Item>
              <NavDropdown.Item href="/products/menwear">Erkek Giyim</NavDropdown.Item>
              <NavDropdown.Item href="/products/electronics">Elektronik</NavDropdown.Item>
              <NavDropdown.Item href="/products/jewelery">Hediyelik Eşya</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>

            {isLoggedIn ? <NavDropdown title={<span className="text-muted">Kullanıcı</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">Profil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={handleLogout}>Çıkış yap</NavDropdown.Item>
            </NavDropdown> : <NavDropdown title={<span className="text-muted">Kullanıcı</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/login">Giriş yap</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signup" >Üye ol</NavDropdown.Item>
            </NavDropdown>}
            <Nav.Link href="/usercart" className="text-muted">Sepetim</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {isLoggedIn ? <Navbar.Brand href="/">
          <a href="/usercart"><i class="fas fa-shopping-cart text-muted" style={{ color: "#f2f2f2" }}></i>
            {count > 0 ? <small><span class="badge rounded-pill badge-notification bg-danger">{count}</span></small> : null}
          </a>
        </Navbar.Brand> : null}


      </Container>

    </Navbar>
  );
}

export default NavbarComponent;
