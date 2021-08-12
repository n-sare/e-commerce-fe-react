import NavbarComponent from "../components/navBar";

import Footer from "../components/footer";
import ProductsCategory from "../components/productsCategory";


function Products(props) {
    //const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    const {categoryOfComponent}= props

    return (

      <div className="home-page">
          <NavbarComponent/>
          <ProductsCategory category={categoryOfComponent}/>
          <Footer/>
          
      </div>
    );
  }
  
  export default Products;
  