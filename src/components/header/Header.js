import React from "react";
import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block/CartBlock";
import './header.css'

export const Header =()=> {
    return (
        <div className="header">
            <div className="wrapper">
                <Link to="/" className="header__store-title">
                    Game store
                </Link>
            </div>
            <div className="wraper header__cart-btn-wrapper">
                <CartBlock/>
            </div>
        

        </div>
    )
}