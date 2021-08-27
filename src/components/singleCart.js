import { useDispatch, useSelector } from "react-redux";
import "../styles/userCart.css"
import { removeFromCart } from "../store/actions/cartActions"
import { useEffect, useState } from "react";

//This is a component called in singleCartContainer
//When user adds to cart and navigates to her/his cart, this component is displayed as group
function SingleCart(props) {
    const userCart = useSelector(state => state.usercart)
    const { usercart } = userCart;

    const { title, price, image, productId, userId } = props;
    const [cartItem, setCartItem] = useState([])


    const dispatch = useDispatch();
    useEffect(() => {
        const { usercart } = userCart;
        setCartItem(usercart.filter(cart => cart.userId === userId && cart.products[0].productId === productId))

    }, [usercart])

    const handleDelete = () => {
        setCartItem(usercart.filter(cart => cart.userId === userId && cart.products[0].productId === productId))
        //console.log("cartitem: ", cartItem[0]?.id)
        dispatch(removeFromCart(cartItem[0]?.id))

    }

    return (


        <li class="cart_item clearfix">
            <div class="cart_item_image"><img src={image} alt="" style={{ width: "100px" }} /></div>
            <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                <div class="cart_item_name cart_info_col">
                    <div class="cart_item_title">Ürün</div>
                    <div class="cart_item_text">{title}</div>
                </div>
                <div class="cart_item_quantity cart_info_col">
                    <div class="cart_item_title">Sepetimden Çıkar</div>
                    <div class="cart_item_text"><i class="bi-trash" style={{ fontSize: "24px" }} onClick={handleDelete}></i></div>
                </div>
                <div class="cart_item_price cart_info_col">
                    <div class="cart_item_title">Ücret</div>
                    <div class="cart_item_text">{price}</div>
                </div>


            </div>
        </li >


    );
}

export default SingleCart;
