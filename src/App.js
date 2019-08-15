import React from 'react';
import './App.css';
import Form from './components/Form';
import ProductList from './components/List';
import { connect } from 'react-redux';
import { doRead, useApi } from './actions/action';

class CartForm extends React.Component {

  constructor (props) {
    super(props);
    this.handleChangeValue=this.handleChangeValue.bind(this);
  }

  handleChangeValue(e) {
    this.props.useApi({ useApi: e.target.checked });
    this.props.doRead();
  }
  
  render() {
    return (
      <div>
        <div>
          <div className="settings">
            <h3 className="display-ib">Use API</h3>
            <label className="switch">
              <input type="checkbox" onChange={ this.handleChangeValue }/>
              <span className="slider round"></span>
            </label>
          </div>
          <div className="content-center">
          <h1 className="display-ib">Products</h1>
          </div>
        </div>
        <Form />
        <ProductList />
      </div>
    );
  }
}

export default connect(null, {doRead, useApi})(CartForm);
