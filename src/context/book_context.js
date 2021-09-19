import axios from 'axios'
import React, {useContext,useEffect,useReducer} from 'react'
import reducer from '../reducers/book_reducer';
import {book_url as url } from '../helpers/constants'

import {

    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR

} from '../action'

const initialState = {
    productsLoading : false,
    productsError : false,
    products:[],


}

const ProductsContext = React.createContext();

export const ProductsProvider = ({children}) => {
 
    const [state,dispatch] = useReducer(reducer,initialState)

     const fetchBooks = async(url) => {

         dispatch({type: GET_PRODUCTS_BEGIN})

         try{

            const response = await axios.get(url,{

                headers:{
                    'Content-type' : 'application/json'
                }
            })

            const products = response.data;
            dispatch({type:GET_PRODUCTS_SUCCESS,payload:products});

         }catch(error)
         {
              dispatch({type:GET_PRODUCTS_ERROR})
         }
     };

       useEffect(() => {
           
        fetchBooks(`${url}`);
       },[]);

    return (
        <ProductsContext.Provider value={{...state,fetchBooks}}>
          {children}
        </ProductsContext.Provider>
      )
    }

// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}