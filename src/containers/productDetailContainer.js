import React, { useEffect , useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../store/actions/productActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Height } from "@material-ui/icons";
import {CardDeck, CardGroup} from "react-bootstrap";
import ProductCard from "./productCard"
import ProductDetail from "../components/productDetail";

const ProductDetailContainer = (props) => {
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.products);
  console.log(productsList)
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
         <ProductCard key={key} title = {p.title} image={p.image} price= {p.price} onClick={() => {<Link to="/productdetail"><ProductDetail key={key} title={p.title} image={p.image} price={p.price} description={p.description}/></Link> }}/>
      </div>
      
      
)}
</CardGroup>
      </div>
      </>
        
      );
  }

      export default ProductsCategory;
