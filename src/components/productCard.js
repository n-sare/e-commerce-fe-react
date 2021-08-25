import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { addToCard, getUserCart } from "../store/actions/cartActions";
import { useHistory } from "react-router-dom";
import "../styles/productCard2.css"

const ProductCard = (props) => {
   //ProductsCategory calles this component and passes props below
   const { title, price, image, id } = props;

   //userInfo is a necessity, comes from store.
   const userInfo = useSelector(state => state.user);
   const { user, isLoggedIn } = userInfo;

   //Dispatch is a necessity so that we can dispatch action
   const dispatch = useDispatch();

   //useHistory is a necessity for redirect
   const history = useHistory();

   const handleCart = () => {
      //To trigger addToCart, login is mandatory 
      if (isLoggedIn) {
         dispatch(addToCard(user[0].id, id));
         dispatch(getUserCart(user[0].id))
      } else {
         history.push("/login");
      }
   }

   return (
      <div class="col h-100">
         <div class="card h-100 shadow-sm custom-card"> <Link to={`/productdetail/${id}`}><img src={image} class="card-img-top custom-card-img-top" alt="..." /></Link>
            <div class="card-body">
               <div class="clearfix mb-3"> <span class="float-start price-hp">{price} TL</span> <span class="float-end"> <Link to={`/productdetail/${id}`} class="text-decoration-none text-dark"><a class="text-muted small" href="#">Detaylar</a></Link></span> </div>
               <Link to={`/productdetail/${id}`} class="text-decoration-none text-dark"><h5 class="card-title font-weight-normal">{title}</h5></Link>
               <div class="text-center my-4"> <a href="#" class="btn btn-warning custom-btn custom-btn-warning" onClick={handleCart}>Sepete Ekle</a> </div>
               <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
            </div>
         </div>
      </div>

   )

}

export default ProductCard;