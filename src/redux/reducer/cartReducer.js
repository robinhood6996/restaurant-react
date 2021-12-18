

function cartReducer(cart = JSON.parse(localStorage.getItem('carts')) || [], action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingCart = [...cart];
            const coming = action.payload;
            const removeD = existingCart.find(food => food.id === coming.id)
            if (removeD) {
                removeD.qty = removeD.qty + 1;
                localStorage.setItem('carts', JSON.stringify(existingCart))
                return existingCart
            } else {
                action.payload.qty = 1;
                const newCart = [...existingCart, action.payload];
                localStorage.setItem('carts', JSON.stringify(newCart))
                return newCart;
            }

        }
        case 'REMOVE_FROM_CART': {
            const existingCart = [...cart];
            const newCart = existingCart.filter(cart => cart.id !== action.payload.id);
            return newCart;
        }

        default: return cart;
    }
}

export default cartReducer;