import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

function cartReducer(cart = JSON.parse(localStorage.getItem('carts')) || [], action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingCart = [...cart];
            const coming = action.payload;
            const removeD = existingCart.find(food => food.id === coming.id)
            if (removeD) {
                removeD.qty = removeD.qty + 1;
                localStorage.setItem('carts', JSON.stringify(existingCart));
                Toast.fire({
                    icon: 'success',
                    title: 'Successfully added to cart!'
                })
                return existingCart
            } else {
                action.payload.qty = 1;
                const newCart = [...existingCart, action.payload];
                localStorage.setItem('carts', JSON.stringify(newCart));
                Toast.fire({
                    icon: 'success',
                    title: 'Successfully added to cart!'
                })
                return newCart;
            }

        }
        case 'REMOVE_FROM_CART': {
            const existingCart = [...cart];
            const newCart = existingCart.filter(cart => cart.id !== action.payload.id);
            return newCart;
        }
        case 'REMOVE_ALL_FROM_CART': {
            const emptyCart = [];
            return emptyCart;
        }

        default: return cart;
    }
}

export default cartReducer;