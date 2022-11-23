import React, { Component } from 'react';
import menu from '../../constants/menu';

import './logout.css';



export default class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      home: menu.home.url
    }
  }



  render() {
    return (
      <div className='container align-center'>
        <p>Continue to Logout </p>
        <button type="button" id = 'btn-secondary' className="btn-secondary" >LogOut</button>
      </div>
    );
  }

};
