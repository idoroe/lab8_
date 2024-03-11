import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

//fetches a list of all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error; // Rethrow to allow caller to handle
    }
};

//Fetches details for a single product by its ID 
export const getProductDetails = async(id) =>{
    try{
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
    } catch (error) {
        throw error;
    }
};

export const removeProduct = async (id) => {
    try{
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
   } catch (error) {
        throw error; // Rethrow to allow caller to handle
   }
};

//adds a new product to the database
export const addProduct = (product) => {
    return axios.post(`${BASE_URL}/add`, JSON.stringify(product));
};

//Edits an existing product by ID
export const editProduct = (id,product) => {
    return axios.post(`${BASE_URL}/${id}`,JSON.stringify(product))
    //implement using similar logic as addProduct function but use axios.
    
};