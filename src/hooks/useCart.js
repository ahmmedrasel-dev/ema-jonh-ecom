import { useEffect, useState } from "react"
import { getStoreCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    /* 
      Akane amra sob gulo product load na kore local storeage a joto gulo id achy sei id gulo dia database theke khuje ane load korabo. 
    */
    const storeCart = getStoreCart();
    const saveCart = [];
    /* Object.keys() dia object er keys gulo ber kore ana hoichy */
    const keys = Object.keys(storeCart);

    fetch('http://localhost:5000/productByKeys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(keys)
    })
      .then(res => res.json())
      .then(products => {
        for (const id in storeCart) {
          const addedProduct = products.find(product => product._id === id);
          if (addedProduct) {
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct)
          }
        }
        setCart(saveCart)
      })

  }, [])

  return [cart, setCart]
}

export default useCart;