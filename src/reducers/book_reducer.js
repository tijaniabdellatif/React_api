import {
   
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
 
  } from '../action'
  
  const products_reducer = (state, action) => {
  

    if(action.type===GET_PRODUCTS_BEGIN)
    {
        return {...state,productsLoading:true}
    }

    if(action.type === GET_PRODUCTS_SUCCESS)
    {
        // console.log(action.payload);
        return {...state,products:action.payload}
    }

    if(action.type === GET_PRODUCTS_ERROR)
    {
        return {...state,productsLoading:false,productsError:true}
    }
    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
  export default products_reducer
  