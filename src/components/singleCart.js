import "../styles/userCart.css"

//This is a component called in singleCartContainer
//When user adds to cart and navigates to her/his cart, this component is displayed as group
function SingleCart(props) {


    const { title, price, image } = props;

    return (


        <li class="cart_item clearfix">
            <div class="cart_item_image"><img src={image} alt="" style={{ width: "100px" }} /></div>
            <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                <div class="cart_item_name cart_info_col">
                    <div class="cart_item_title">Ürün</div>
                    <div class="cart_item_text">{title}</div>
                </div>


                <div class="cart_item_price cart_info_col">
                    <div class="cart_item_title">Ücret</div>
                    <div class="cart_item_text">{price}</div>
                </div>


            </div>
        </li>


    );
}

export default SingleCart;
