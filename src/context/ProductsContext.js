import React, { createContext, useContext, useState } from 'react';

const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const saveProduct = (product) => {
        setProducts(currentProducts => {
            //check if product with given ID already exists
            const index = currentProducts.findIndex(p => p.id === product.id);

            if (index !== -1){
                //product exists, replace it
                const newProducts = [...currentProducts];
                newProducts[index] = product;
                return newProducts;
            } else {
                //product doesnt exist, add it as a new product
                //If the product doesnt have an ID, generate one
                const newProduct = product.id ? product : {...product, id: Date.now()};
                return [...currentProducts, newProduct];
            }
        });
    };
    return (
        <ProductsContext.Provider value={{products, setProducts, saveProduct }}>
            {children}
        </ProductsContext.Provider>
    );
};