import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doCreate, doUpdate } from '../actions/action';

export class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: 0,
            name: '',
            quantity: 0,
            created: null
        };
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    componentDidUpdate(prevProps) {
        const o = prevProps;
        const n = this.props;
        if (n.isEditing && o.productId !== n.productId && o.name !== n.name) {
            this.setState({ productId: n.productId, name: n.name, quantity: n.quantity, created: n.created });
        } else if (!n.isEditing && (o.productId !== n.productId || n.productId)) {
            this.setState({ productId: 0, name: '', quantity: 0, created: null });
        }
    }

    async handleCreate(e) {
        e.preventDefault();
        const value = this.state.name;
        const quantity = this.state.quantity;
        const obj = { name: value, quantity: quantity };

        try {
            await this.props.doCreate(obj);
            this.setState({ productId: 0, name: '', quantity: 0, created: null });
        } catch (e) {}
    }

    handleUpdate(e, productId) {
        e.preventDefault();

        const products = this.props.products.slice();
        const index = products.findIndex(p => p.productId === productId);
        const dirtyProduct = Object.assign({}, products[index]);
        const newProduct = {
            name: this.state.name,
            quantity: this.state.quantity
        }

        this.props.doUpdate({...dirtyProduct, ...newProduct});
    }

    handleChangeValue(e) {
        if (e.target.id === "quantity" && (Number.isNaN(e.target.value) || e.target.value < 0 || e.target.value === "")) {
            this.setState({ [e.target.id]: 0 });
        } else {
            this.setState({ [e.target.id]: e.target.value });
        }
    }

    render() {
        return (
            <div className="padding-l content-center">
                <form>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" id="name" value={this.state.name} onChange={this.handleChangeValue} />
                    </div>
                    <div className="form-group">
                        <label>Quantity:</label>
                        <input type="number" id="quantity" value={this.state.quantity} onInput={this.handleChangeValue} onChange={this.handleChangeValue} min="0" />
                    </div>
                    <button className="form-submit" onClick={ !this.state.productId ? this.handleCreate : (e) => this.handleUpdate(e, this.state.productId) } disabled={ !this.state.name.length }>
                        {!this.state.productId ? 'ADD' : 'UPDATE'}
                    </button>
                    <button className="form-submit" onClick={ !this.state.productId ? this.handleCreate : (e) => this.handleUpdate(e, this.state.productId) } hidden={ !!!this.state.productId }>
                        CANCEL
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        isEditing: state.dirty.isEditing,
        productId: state.dirty.productId,
        name: state.dirty.name,
        quantity: state.dirty.quantity,
        created: state.dirty.created
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doCreate: product => dispatch(doCreate(product)),
        doUpdate: product => dispatch(doUpdate(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);