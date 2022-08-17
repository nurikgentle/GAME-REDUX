import React, { useCallback, useState } from "react";
import './cart-block.css';
import { useSelector } from "react-redux";
import {BiCartAlt} from 'react-icons/bi';
import { CartMenu } from "../cartMenu/CartMenu";
import { calcTotalPrice } from "../utils";
import { ItemsInCart } from "../items-in-cart/ItemsInCart";
import { useNavigate } from "react-router-dom";

export const CartBlock =  () => {
    const [isCartMenuVisible, setIscartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const navigate = useNavigate();
    const totalPrice = calcTotalPrice(items);

    const hanleClick = useCallback(()=> {
        setIscartMenuVisible(false);
        navigate('/order');
    },[navigate]);
    return (
        <div className="cart-block">
        <ItemsInCart  quantity={items.length} />
            <BiCartAlt size={25} className="cart-block__icon" onClick={()=> setIscartMenuVisible(!isCartMenuVisible)}/>
           {totalPrice > 0 ? <span className="cart-block__total-price">{totalPrice} pуб.</span> :null }
          { isCartMenuVisible &&  <CartMenu items={items} onClick={hanleClick}/>}
        </div>
    )

}