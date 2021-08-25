import NavbarComponent from "../components/navBar";
import Login from "../components/login";
import Footer from "../components/footer";

function LoginPage() {
  //Login Page container which calls Login component.
  return (
    <div className="home-page">
      <NavbarComponent />
      <Login />
      <Footer />

    </div>
  );
}

export default LoginPage;
