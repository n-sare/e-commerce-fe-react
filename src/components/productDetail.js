import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "../styles/productDetail.css"
import { withRouter } from "react-router";
import NavbarComponent from "./navBar"
import Footer from "./footer"
import { useHistory } from "react-router-dom";
import { addToCard } from "../store/actions/cartActions";
import { getUserCart } from "../store/actions/cartActions";

//This component shows detail about single product
const ProductDetail = (props) => {

    const productList = useSelector(state => state.products);
    const { products, loading } = productList;

    const userInfo = useSelector(state => state.user);
    const { user, isLoggedIn } = userInfo;

    const dispatch = useDispatch();
    const history = useHistory();


    //props.match.params takes key from url, which is id in this case
    let selectedProduct = products.filter(p => p.id == props.match.params.id)



    const handleCart = (event) => {
        //To trigger addToCart, login is mandatory 
        event.preventDefault();
        if (isLoggedIn) {
            dispatch(addToCard(user[0].id, props.match.params.id));
            dispatch(getUserCart(user[0].id));
        } else {
            history.push("/login");
        }

    }


    return (

        <div className="body">
            <NavbarComponent />

            {loading ? "Loading..." : <div className="container custom-container">
                <div className="card card-productdetail">
                    <div className="container-fliud">
                        <div className="row">
                            <div className="preview col-md-6">

                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img className="img" src={selectedProduct[0].image} /></div>
                                </div>


                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{selectedProduct[0].title}</h3>

                                <p className="product-description">{selectedProduct[0].description}</p>
                                <h4 className="price text-center"> <span>{selectedProduct[0].price} TL</span></h4>


                                <div className="action text-center">
                                    <button className=" btn custom-btn-warning" type="button" onClick={handleCart}>Sepete ekle</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <Footer />
        </div>
    );
}



export default withRouter(ProductDetail);