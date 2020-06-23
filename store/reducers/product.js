import PRODUCTS from "../../data/dummy-data"

const initialState = {
    availableProducts : PRODUCTS,
    userProducts : PRODUCTS.filter(prod => ownerId)
}  
export default (state = initialState , action) => {
    return state
}