const initialState = {
    cartCounter: 0,
    totalPrice: 0,
    cart: [],
    cartId: 0,
    boardLength: 0,
    showCheckout: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
        let cart = state.cart.slice()
        //cart.push({id: state.cartId, content: action.payload.board})
        return {
            ...state,
            cartCounter: state.cartCounter + 1,
            totalPrice: state.totalPrice + action.payload.board.price,
            cart: cart.concat({id: state.cartId, content: action.payload.board, length: action.length}),
            cartId: state.cartId + 1,
            boardLength: action.length}
        case 'REMOVE':
        return {...state,
             cartCounter: state.cartCounter - 1,
             totalPrice: state.totalPrice - action.payload.board.content.price,
             cart: state.cart.filter(item => action.payload.board.id !== item.id)           
            }
        case 'CHECKOUT':
        return {...state,
            showCheckout: true
        }
        case 'EMPTY_CART':
        return { ...state,
            cartCounter: 0,
            totalPrice: 0,
            cart: [],
            cartId: 0
        }

        default: 
        return state
    }
}

export default reducer