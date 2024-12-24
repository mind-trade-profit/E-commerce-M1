import { useCart } from "../../Context/Context"
import { Link } from "react-router-dom"
import classCart from "./CartView.module.css"
import { useNotification } from "../../Notifications/Notifications"

const CartView = () => {
    const { cart, total, removeItem } = useCart()
    const {showNotification} = useNotification()


   
    return (
        <>
            <h1 className={classCart.tittle}>Shop Cart</h1>
            <section className={classCart.containerComponents}>
                <div>
                    {cart.map((callProd) => {
                        return (
                            <div key={callProd.id} className={classCart.containerProducts}>
                                <div className={classCart.containerImg}>
                                    <img src={callProd.img} className={classCart.img} alt="img"/>
                                </div>
                                <div>
                                    <h2 className={classCart.titleP}>info of product</h2>
                                    <h3>{callProd.name}</h3>
                                    <h4>{`Total: ${callProd.total}`}</h4>
                                    <h4>{`Price per unit: $${callProd.price}`}</h4>
                                    <h4>{`Total amount: $${callProd.total * callProd.price}`}</h4>
                                </div>
                                <div className={classCart.containerButtons}>
                                    <button onClick={() => {removeItem(callProd.id), showNotification("product withdrawn")}} className={classCart.removeItem}>Remove Product</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <section className={classCart.containerFPurchase}>
                    <span>{`Total: $${total}`}</span>
                    <Link to="/checkout" className={classCart.buttonCheckout}>Checkout</Link>
                </section>
            </section>

        </>
    );
};

export default CartView;
