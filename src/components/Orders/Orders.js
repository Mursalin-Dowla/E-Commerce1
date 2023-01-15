import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
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
                <Cart cart={cart}>
                    <button onClick={()=>navigate('/inventory')}>Proceed to checkout</button>
                </Cart>
                </div>
        </div>
        </div>
    );
};

export default Orders;