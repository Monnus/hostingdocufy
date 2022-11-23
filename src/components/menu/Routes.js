import React, {Component} from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from '../main/Home';
import About from '../main/About';
import menu from '../../constants/menu';
import Login from '../forms/Login';
import Error from '../main/Error';
import Contact from '../forms/Contactus';
import Plan from '../main/Plan';
import Learn from '../main/Instruction';
// import Verify from '../forms/Verify';
import Documents from '../documents/Main';
// import VerifierDocuments from '../documents/Verifier';
// import RequesterDocuments from '../documents/Requester';
// import CreateDocuments from '../documents/Create';
// // import LogOut from '../account/LogOut';
// import Transactions from '../account/Transactions';
// // import Profile from '../account/Profile';
// import AuthRoute from '../../utils/AuthRoute';

export default class MyRoutes extends Component{

  constructor(props) {
    super(props);
    this.state={
      menu:menu.routes
    }
  }

  render () {
    return (
   
   <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path={this.state.menu.about.url} exact element={<About/>} />
          <Route path={this.state.menu.home.url} exact element={<Home/>} />
          <Route path={this.state.menu.login.url}  element={<Login/>} />
          <Route path={this.state.menu.contactus.url} element={<Contact/>} />
          <Route path={this.state.menu.plan.url}  element={<Plan/>} />
          <Route path={this.state.menu.learn.url}  element={<Learn/>} />
          <Route path={this.state.menu.documents.url} element={<Documents/>} />


          
          {/*
          <Route path={this.state.menu.verify.url}  element={<Verify/>} />
         
        */}
          {/* <AuthRoute path={this.props.menu.documentsRequester.url} exact component={RequesterDocuments} />
          <AuthRoute path={this.props.menu.documentsVerifier.url} exact component={VerifierDocuments} />
          <AuthRoute path={this.props.menu.documentsCreate.url} exact component={CreateDocuments} />
          {/* <AuthRoute path={this.props.menu.logout.url} exact component={LogOut} /> */}
          {/* <AuthRoute path={this.props.menu.transactions.url} exact component={Transactions} />
          <AuthRoute path={this.props.menu.profile.url} exact component={Profile} /> */} 
          <Route element={<Error/>}/>
          </Routes>
  
  
    );
  }
}
