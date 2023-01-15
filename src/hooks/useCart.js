import { useEffect, useState } from 'react';
import { getStoredData } from '../utilities/fakedb';

const useCart = (products) => {
    const [cart, setCart] =useState([]);

    useEffect(()=>{
        const storedData = getStoredData();
        const savedData = []
        for (const id in storedData){
           const addedProduct = products.find(product=> product.id === id)

           if(addedProduct){
            const quantity = storedData[id];
            addedProduct.quantity = quantity;
            savedData.push(addedProduct);
           }
        }
        setCart(savedData);
    },[products])
    return [cart,setCart]
};

export default useCart;