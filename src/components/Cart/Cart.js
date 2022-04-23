import React, {useState, useEffect} from 'react';
import styles from "./Cart.module.css";
import {connect} from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = ({cart})=>{
    const [totalPrice, setTotalPrice]= useState(0);
    const [totalItems, setTotaltems]= useState(0);


    useEffect(()=>{
        let items = 0;
        let price = 0;

        cart.forEach((item)=>{
            items+= item.qty;
            price +=item.qty* item.price;
        });

        setTotaltems(items);
        setTotalPrice(price);
    }, [cart, totalPrice,totalItems,setTotalPrice,setTotaltems]);

    return(
        <div className={styles.cart}>
            <div className={styles.cart_items}>
                {cart.map((item)=>(<CartItem key={item.id} item={item}/>))}
            </div>
            <div className={styles.cart_summary}>
                <h4 className={styles.summary_title}>Cart Summary</h4>
                <div className={styles.summary_price}>
                    <span>Total:({totalItems} items)</span>
                    <span>#{totalPrice}</span>
                </div>
                <button className={styles.summary_checkoutBtn}>Proceed to checkout</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart:state.shop.cart,
    }
}

export default connect(mapStateToProps)(Cart)