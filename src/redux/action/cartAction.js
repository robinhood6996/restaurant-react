export function addToCart(payload) {
    return {
        type: 'ADD_TO_CART',
        payload
    }
}
export function removeFromCart(payload) {
    return {
        type: 'REMOVE_FROM_CART',
        payload
    }
}

export function removeAllFromCart() {
    return {
        type: 'REMOVE_ALL_FROM_CART'
    }
}