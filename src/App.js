import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-dom';

import Header from './components/menu/Header';
import MyRoutes from './components/menu/Routes';
import Footer from './components/menu/Footer';
import menu from './constants/menu';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: menu.routes,
      loader: true
    }
    setTimeout(() => {
     return  this.state.loader=false;
    }, 3000)
  }

  render() {

    return (
<>
      
            <Header/>
            <MyRoutes menu={~this.state.routes}/>
            <Footer/>
 
</>

    );
  }
}
