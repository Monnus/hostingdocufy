import React, { Component } from 'react';
import menu from '../../constants/menu';
import './verify.css';



export default class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      home: menu.home.url,
      getStatusLabel: accountsConst.getStatusLabel,
      submitted: false,
      accounts: [],
      account: '',
      document: '',
      errors: {
        account: 'Please select an account',
        document: 'Please enter document address'
      }
    };
  }


  render() {
    return (
      <div className='container'>
        <div className='row  align-center'>
          <div className='col-12'>
            <h2 className="custom-h1"> Verify Document </h2>
          </div>
        </div>
        <div className='form-group row padding-40'>
          <div className='col-6'>
            <div className='row'>
              <label htmlFor='select'  className='custom-acc'>Account</label>
              <div className='col-8'>
                <select name='account' className='custom-select'  defaultValue={this.state.account}>
                  <option selected disabled hidden>Choose here</option>
                  {this.state.accounts.map((account, index) => (<option value={account} key={index}>{account}</option>))}
                </select>
                {this.state.submitted && !this.state.account && (<p className='error-msg'>{this.state.errors.account}</p>)}
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='row'>
              <label htmlFor='select' className='custom-acc'>Document Address</label>
              <div className='col-8'>
                <input className='form-control' name='document' type='text'  defaultValue={this.state.document}/>
                {this.state.submitted && !this.state.document && (<p className='error-msg'></p>)}
              </div>
            </div>
          </div>
        </div>
        <div className='row  align-center'>
          <div className='col-12'>
            <button type='button' id='btn-verify' className='btn-verify'>Verify</button>
          </div>
        </div>
        {this.state.submitted && this.props.documents.document.valid && (
          <div className='row'>
            <div className='col-12'>
              <span className="custom-h1"> Name&nbsp;&nbsp;&nbsp; </span>
              <span>
                <a className="custom-name" href={this.props.documents.document.link} target='_blank' >
                  {this.props.documents.document.name}
                  </a>
              </span>
            </div>
            <div className='col-12 '>
              <span className="custom-h1"> Owner&nbsp;&nbsp; </span>
              <span>
                {this.props.documents.document.requester}
                </span>
            </div>
            <div className='col-12'>
              <span className="custom-h1"> Verifier&nbsp; </span>
              <span>
                {this.props.documents.document.requester}
                </span>
            </div>
            <div className='col-12'>
              <span className="custom-h1"> Status&nbsp;&nbsp; </span>
              <span className={this.state.getStatusLabel(this.props.documents.document.status).label}>
                {this.state.getStatusLabel(this.props.documents.document.status).label}
              </span>
            </div>
          </div>
        )}
        {this.state.submitted && this.props.documents.document.valid === false && (
          <div>
            <p className='error-msg'> Invalid document address !!! </p>
          </div>
        )}
      </div>
    );
  }

};
