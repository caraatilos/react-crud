const initialState = {
    products: [
        { productId: 1, name: 'Apple', quantity: 12, created: new Date() },
        { productId: 2, name: 'Banana', quantity: 35, created: new Date() }
    ],
    productsAlt: [],
    dirty: {
        isEditing: false,
        productId: 0,
        name: '',
        quantity: 0,
        created: null,
    },
    useApi: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD': {
            return Object.assign({}, state, { products: state.products.concat(action.payload), dirty : {} });
        }
        case 'UPDATE': {
            let products = state.products.slice();
            const index = products.findIndex((item) => item.productId === action.payload.productId);
            products[index] = { ...products[index], ...action.payload };
            return Object.assign({}, state, { products: products, dirty : {} });
        }
        case 'DELETE': {
            console.log(action.payload);
            let products = state.products.slice();
            const index = products.findIndex((item) => item.productId === action.payload.productId);
            products.splice(index, 1);
            return Object.assign({}, state, { products: products });
        }
        case 'EDIT': {
            return Object.assign({}, state, { dirty: action.payload });
        }
        case 'LOAD': {
            return Object.assign({}, state, { products: action.payload });
        }
        case 'API': {
            let currentProducts = state.products.slice();
            let hiddenProducts = state.productsAlt.slice();
            return Object.assign({}, state, { useApi: action.payload.useApi, products: hiddenProducts, productsAlt: currentProducts });
        }
        default: return state;
    }
}

export default reducer;