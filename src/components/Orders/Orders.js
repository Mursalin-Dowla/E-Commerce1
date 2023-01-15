import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart,setCart] = useCart(products);

    const handleRemoveFromCart = (product)=>{
        const rest = cart.filter(pd=> pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div>
            <div className='shop-container'>
            <div className="review-items-container">
                {
                   cart.map((item=><ReviewCart key={item.id}
                   item={item} 
                   handleRemoveFromCart ={handleRemoveFromCart}
                   />))
                }
                </div>
            <div className="cart-container">
                <Cart cart={cart}/>
                </div>
        </div>
        </div>
    );
};

export default Orders;