import API from '../Api';

export function addProduct(payload) {
    return { type: 'ADD', payload };
}

export function updateProduct(payload) {
    return { type: 'UPDATE', payload };
}

export function deleteProduct(payload) {
    return { type: 'DELETE', payload };
}

export function loadProducts(payload) {
    return { type: 'LOAD', payload: payload };
}

export function editProduct(payload) {
    return { type: 'EDIT', payload: payload };
}

export function useApi(payload) {
    return { type: 'API', payload: payload };
}

export function doRead() {
    return function (dispatch, getState) {
        if (getState().useApi) {
            return API.get('products')
            .then(response => { return response.data })
            .then(products => dispatch(loadProducts(products)))
            .catch((err) => {
                console.error(err);
            } );
        }
        dispatch(loadProducts(getState().products));
    }
}

export function doCreate(payload) {
    return function (dispatch, getState) {
        if (getState().useApi) {
            return API.post('product/add', payload)
            .then(response => { return response.data })
            .then(product => dispatch(addProduct(product)))
            .catch((err) => {
                console.error(err);
                throw new Error(err);
            } );
        }
        const uuidv4 = require('uuid/v4');
        const id = uuidv4();
        payload.productId = id;
        dispatch(addProduct(payload));
    }
}

export function doUpdate(payload) {
    return function (dispatch, getState) {
        if (getState().useApi) {
            return API.put('product/update', payload)
            .then(response => { return response.data })
            .then(product => dispatch(updateProduct(product)))
            .catch((err) => {
                console.error(err);
            } );
        }
        dispatch(updateProduct(payload));
    }
}

export function doDelete(payload) {
    return function (dispatch, getState) {
        if (getState().useApi) {
            return API.delete('product/delete?productId=' + payload.productId)
            .then(() => dispatch(deleteProduct(payload)))
            .catch((err) => {
                console.error(err);
            } );
        }
        dispatch(deleteProduct(payload));
    }
}