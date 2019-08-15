import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doRead, editProduct, doDelete } from '../actions/action';

export class ProductList extends Component {

  componentDidMount() {
    this.props.doRead();
  }

  handleEdit(e, p) {
    e.preventDefault();
    this.props.doEdit({ productId: p.productId, name: p.name, quantity: p.quantity, isEditing: true });
  }

  handleDelete(e, p) {
    e.preventDefault();
    if (window.confirm('Delete ' + p.name + '?')) {
      this.props.doDelete({ productId: p.productId });
    }
  }

  render() {
    const uuidv4 = require('uuid/v4');
    return (
      <div className="padding-m content-center">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.props.products.map((p, i) =>
              <tr key={ uuidv4() }>
                <td>{ p.name }</td>
                <td>{ p.quantity }</td>
                <td>
                  <button className="action-btn" onClick={ (e) => this.handleEdit(e, p) } disabled={ this.props.productId === p.productId }>Edit</button>
                  <button className="action-btn" onClick={ (e) => this.handleDelete(e, p) } disabled={ this.props.productId === p.productId }>Delete</button>
                </td>
              </tr >
            ) }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    products: state.products,
    productId: state.dirty.productId,
    useApi: state.api
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doRead: () => dispatch(doRead()),
    doEdit: payload => dispatch(editProduct(payload)),
    doDelete: (payload) => dispatch(doDelete(payload))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductList);