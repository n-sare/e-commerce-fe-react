import NavbarComponent from "../components/navBar";
import Login2 from "../components/login2";
import Footer from "../components/footer";

function LoginPage() {
    //const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    return (
      <div className="home-page">
          <NavbarComponent/>
          <Login2/>
          <Footer/>
          
      </div>
    );
  }
  
  export default LoginPage;
  