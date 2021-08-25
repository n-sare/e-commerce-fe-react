import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../store/actions/productActions";
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductCard from "./productCard"
import "../styles/productCard2.css"

//This component consists of filtering products and displaying them based on category.
//ProductCard is used to map products.
const ProductsCategory = (props) => {

  const dispatch = useDispatch();
  const productsList = useSelector(state => state.products);
  const { products, loading, error } = productsList;

  const { category } = props;
  //States - showhidden=filtering area is opened or closed
  const [showhidden, setShowhidden] = useState(false);
  //States - search=search area
  const [search, setSearch] = useState("");
  //States - select=price filter
  const [select, setSelect] = useState("");
  //States - filteredProducts=initialized inside useEffect, changes based on filtering
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    // Anything in here is fired on component mount. 
    //Calling getProducts from actions.
    dispatch(getProducts());

  }, [dispatch]);

  useEffect(() => {
    // Anything in here is fired on component mount.
    //setting state to get products based on category
    setFilteredProducts(products.filter(p => p.category == category))

  }, [products]);

  //Filtering method
  const handleFilter = (event) => {
    event.preventDefault();
    //Filtering products based on price - increasing and decreasing
    if (select === "2") {
      setFilteredProducts(filteredProducts.sort((a, b) => {
        return b.price - a.price
      }));
    } else {
      setFilteredProducts(filteredProducts.sort((a, b) => {
        return a.price - b.price
      }));
    }
    //Filtering products based on keyword
    setFilteredProducts(filteredProducts.filter((p) => {
      return p.title.toLowerCase().match(search.toLowerCase());
    }));


  }

  return (
    // Filtering area
    <main>
      <button type="button" class="btn btn-light align-self-end" onClick={() => setShowhidden(!showhidden)}>Filtrele<i class="bi bi-filter"></i></button>
      {showhidden ?
        <div class="container">
          <div class="row">
            <div class="col">
              <select value={select} onChange={e => setSelect(e.currentTarget.value)} class="form-select">
                <option defaultValue>Fiyata Göre</option>
                <option value="1">Artan</option>
                <option value="2">Azalan</option>
              </select>
            </div>
            <div class="col-6">
              <div >
                <div class="input-group mb-3">
                  <input type="text" class="form-control" onChange={(e) => setSearch(e.target.value)} placeholder="Anahtar Kelime Girin..." />
                  <div class="input-group-append">
                    <span class="input-group-text"><i class="fa fa-search"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <button class="btn btn-warning custom-btn custom-btn-warning" onClick={handleFilter}>Ara</button>
            </div>
          </div>
        </div> : null}
      {/* Below is the area where produts are shown */}
      <div class="container-fluid bg-trasparent my-4 p-3 custom-container-fluid" style={{ position: "relative" }}>
        <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          {loading ? "Loading..." : error ? error.message : filteredProducts.map((p, key) =>
            <div key={key}>
              <ProductCard key={key} title={p.title} image={p.image} price={p.price} id={p.id} />
            </div>
          )}
        </div>
      </div>
    </main>

  );
}

export default ProductsCategory;
