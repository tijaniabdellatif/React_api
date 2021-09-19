import React from "react";
import { useProductsContext } from "../context/book_context";

const Home = () => {

    
    const {products : products} = useProductsContext();


    return (
        <>
        <h1>Home page</h1>
        <p>  </p>
        </>
    );
}

export default Home;