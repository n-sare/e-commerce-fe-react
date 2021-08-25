import "../styles/userCart.css"
import SingleCart from "../components/singleCart";
import Footer from "../components/footer";
import NavbarComponent from "../components/navBar";
import { getUserCart } from "../store/actions/cartActions"
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from "react";

function UserCartContainer() {

    const productList = useSelector(state => state.products)
    const { products } = productList;

    const userData = useSelector(state => state.user)
    const { user } = userData;

    const userCart = useSelector(state => state.usercart)
    const { usercart } = userCart;

    //Finding products based on product id inside cart object - so we can display them
    let result = products.filter(o1 => usercart.some(o2 => o2.products[0].productId == o1.id));

    //Total price of every product
    let total = result.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);

    const dispatch = useDispatch();

    //a nullsafe useEffect usage
    useEffect(() => {

        dispatch(getUserCart(user[0]?.id));

    }, [user[0]?.id]);



    return (
        <div>
            <NavbarComponent />
            <div class="cart_section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="cart_container">
                                <div class="cart_title">Sepetiniz</div>
                                <div class="cart_items">
                                    <ul class="cart_list">
                                        {result.map((c, key) => <div key={key}><SingleCart key={key} title={c.title} image={c.image} price={c.price} /><hr /></div>)}



                                    </ul>
                                </div>
                                <div class="order_total">
                                    <div class="order_total_content text-md-right">
                                        <div class="order_total_title">Toplam:</div>
                                        <div class="order_total_amount">{total} TL</div>
                                    </div>
                                </div>
                                <div class="cart_buttons"> <button type="button" class="button cart_button_clear">Alışverişi Tamamlayın</button>  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default UserCartContainer;
