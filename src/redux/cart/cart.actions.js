import CartActionTypes from './cart.types';
import CartActiontypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActiontypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})