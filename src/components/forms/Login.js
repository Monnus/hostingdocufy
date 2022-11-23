import React, { Component } from 'react';
import menu from '../../constants/menu';
import './Login.css';

// import pic1 from '../../assets/images/ladyLogin.png';
import pic2 from '../../assets/images/old_man.png'





export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: menu.home.url,
    

      }
    };
  
  


  render() {

    return (
      <div className='container'>



        <div className='picture-login'>
              <img src={pic2}/>
        </div>



        {/* <div className='title-login'>
          <div className='col-12'>
            <h2 className="custom-login"> Login Account </h2>
          </div>
        </div> */}

      

      <div className='login-box' >

      <h2 className="custom-login"> Login Account </h2>
      
        <div id='login-box' className='form-group row padding-25'>
            <div className='col-2'> </div>
            <label htmlFor='select' className="custom-acc1">Accounts</label>
            <div className='col-6'>
              <select name='account' className='custom-select' onChange={this.onChange} defaultValue={this.state.account}>
                <option value='' selected disabled hidden>Choose here</option>
                {this.state.accounts.map((account, index) => (<option value={account} key={index}>{account}</option>))}
              </select>
              {this.state.submitted && !this.state.account && (<p className='error-msg'>{this.state.errors.account}</p>)}
            </div>
          </div>

          <div className='button-login'>
              <button type='button' className='btn-login' onClick={this.login}>Login</button>
          </div>


      </div>






        {/* <div className='row'>
                <div className='col-12'>
                  <button type='button' className='btn-login' onClick={this.login}>Login</button>
                </div>
        </div> */}




      </div>
    );
  }

};
