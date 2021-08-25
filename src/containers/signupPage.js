import NavbarComponent from "../components/navBar";
import Footer from "../components/footer";
import Signup from "../components/signup";

function SignupPage() {
  //Signup container
  return (
    <div className="home-page">
      <NavbarComponent />
      <Signup />
      <Footer />

    </div>
  );
}

export default SignupPage;
