import NavbarComponent from "../components/navBar";
import Carousel from "../components/carousel";
import CategoriesHomepage2 from "../components/categoriesHomepage2";
import Footer from "../components/footer";

function HomePage() {
    //const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    return (
      <div className="home-page">
          <NavbarComponent/>
          <Carousel/>
          <CategoriesHomepage2/>
          <Footer/>
          
      </div>
    );
  }
  
  export default HomePage;
  