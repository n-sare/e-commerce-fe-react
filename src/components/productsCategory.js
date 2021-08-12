import React, { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../store/actions/productActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardGroup} from "react-bootstrap";
import ProductCard from "./ProductCard/productCard"
import ProductDetail from "./productDetail";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductsCategory = (props) => {
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.products);
  const { products, loading, error } = productsList;
  const {category}=props;
  let filteredProducts = products.filter(p=>p.category==category)
  


  //TODO: filter by category
  useEffect(() => {
    // Anything in here is fired on component mount.
    dispatch(getProducts());

  }, [dispatch]);

  

  return (
    
       <>
      <div className="wrapper">
      <CardGroup>
      {loading ? "Loading..." : error ? error.message : filteredProducts.map((p, key) =>
      
      <div key={key}>
          <Link to={`/productdetail/${p.id}`}>
            <ProductCard key={key} title = {p.title} image={p.image} price= {p.price} id={p.id}/>
         </Link>
          {/* // {<ProductDetail key={key} title={p.title} image={p.image} price={p.price} description={p.description}/>}}/> */}
      </div>
      
      
)}
</CardGroup>
      </div>
      </>
        
      );
  }

      export default ProductsCategory;
