import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "../styles/productDetail.css"
import { useParams } from "react-router";
import NavbarComponent from "./navBar"
import Footer from "./footer"

const ProductDetail =(props) =>{
    
    const productList= useSelector(state => state.products);
    
    const { products } = productList;
    const {id} = useParams();
    let selectedProduct = products.filter(p =>p.id==id)
    
    

return (

   <div>
       <NavbarComponent/>
    <div className="container">
    <div className="card">
        <div className="container-fliud">
            <div className="row">
                <div className="preview col-md-6">
                    
                    <div className="preview-pic tab-content">
                      <div className="tab-pane active" id="pic-1"><img src={selectedProduct[0].image} /></div>
                    </div>
                    <ul className="preview-thumbnail nav nav-tabs">
                      <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={selectedProduct[0].image} /></a></li>
                      <li><a data-target="#pic-2" data-toggle="tab"><img src={selectedProduct[0].image} /></a></li>
                      <li><a data-target="#pic-3" data-toggle="tab"><img src={selectedProduct[0].image} /></a></li>
                      <li><a data-target="#pic-4" data-toggle="tab"><img src={selectedProduct[0].image} /></a></li>
                      <li><a data-target="#pic-5" data-toggle="tab"><img src={selectedProduct[0].image} /></a></li>
                    </ul>
                    
                </div>
                <div className="details col-md-6">
                    <h3 className="product-title">{selectedProduct[0].title}</h3>
                    <div className="rating">
                        <div className="stars">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <span className="review-no">41 reviews</span>
                    </div>
                    <p className="product-description">{selectedProduct[0].description}</p>
                    <h4 className="price">current price: <span>{selectedProduct[0].price}</span></h4>
                    <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                    <h5 className="sizes">sizes:
                        <span className="size" data-toggle="tooltip" title="small">s</span>
                        <span className="size" data-toggle="tooltip" title="medium">m</span>
                        <span className="size" data-toggle="tooltip" title="large">l</span>
                        <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                    </h5>
                   
                    <div className="action">
                        <button className="add-to-cart btn btn-default" type="button">Sepete ekle</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer/>
</div>
);
}



export default ProductDetail;