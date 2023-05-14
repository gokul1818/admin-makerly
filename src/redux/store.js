import{configureStore} from '@reduxjs/toolkit'
import cartslice from './slicer/cart_slice';
const store =configureStore({
    reducer:{
cart:cartslice,
    }
})
export default store ;
