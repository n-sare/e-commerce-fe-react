import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './containers/homePage';
import Products from "./containers/productsByCategory";
import LoginPage from "./containers/loginPage";
import ProductDetail from "./components/productDetail";
import { useSelector } from "react-redux";
import SignupPage from "./containers/signupPage";
import UserCartContainer from "./containers/userCartContainer";




function Root() {
  //Root is where everything happens
  const userData = useSelector(state => state.user);
  const { isLoggedIn } = userData

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/products/jewelery">
            <Products categoryOfComponent={"jewelery"} />
          </Route>
          <Route exact path="/products/womenwear">
            <Products categoryOfComponent={"women's clothing"} />
          </Route>
          <Route exact path="/products/menwear">
            <Products categoryOfComponent={"men's clothing"} />
          </Route>
          <Route exact path="/products/electronics">
            <Products categoryOfComponent={"electronics"} />
          </Route>
          <Route exact path="/usercart">
            <UserCartContainer />
          </Route>
          <Route exact path="/login" component={() => (isLoggedIn ? <HomePage /> : <LoginPage />)} />
          <Route exact path="/signup" component={() => (isLoggedIn ? <HomePage /> : <SignupPage />)} />

          <Route exact path="/productdetail/:id" component={(props) => (<ProductDetail {...props} />)}>

          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default Root;
