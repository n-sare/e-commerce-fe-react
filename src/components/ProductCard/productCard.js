import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./productCard.css"
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = (props)=>{
const {title, price, image, id} = props;
const productList= useSelector(state => state.products);


const handleRoute = (id) =>{
   let a= productList.products["id"]=5;
   console.log(a)
}
return (
     <Card className="prodcard" style={{ width: '18rem', flex: 1}}>
           <Card.Img className="card__img" variant="top" src={image} onClick={handleRoute}/>
           <Card.Body>
            {/* <Card.Title>{p.title}</Card.Title> PROCUCTDETAIL.CSS OVERRIDE EDIYOR (CARD SINIFI)*/}
            <div className="titleDiv">
             <Card.Text style={{fontWeight: 'bold'}}>
               {title}
            </Card.Text> 
            </div>
            <Card.Text className="card__price" style={{fontWeight: 'normal'}}>
               {price} TL
             </Card.Text> 
             <Button variant="primary" className="card__btn">Sepete ekle</Button>
          </Card.Body>
     </Card>




)

}

export default ProductCard;