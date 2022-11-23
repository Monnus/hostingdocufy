import React, { Component } from 'react'
import menu from "../../constants/menu";
import truncate from 'lodash/truncate';



export default class Requester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      documents: menu.document,
      isRequester:0 ,
      url: ''
    };
  }


  render() {
 
    return (
      <div className='container'>
        <div className='row align-center'>
          <div className='col-12'>
            <table className="table table-hover" style={{ borderCollapse: "collapse",borderRadius:"10px"}}>
              <thead>
              <tr  style={{background:"#F75318",borderRadius:"10px"}}>
                <th className="custom-t" style={{color:"white",fontSize:"20px",fontWeight:"600",borderColor:"#F75318"}}>Name</th>
                <th className="custom-t" style={{color:"white",fontSize:"20px",fontWeight:"600",borderColor:"#F75318"}}>Description</th>
                <th className="custom-t" style={{color:"white",fontSize:"20px",fontWeight:"600",borderColor:"#F75318"}}>Address</th>
                <th className="custom-t" style={{color:"white",fontSize:"20px",fontWeight:"600",borderColor:"#F75318"}}>Status</th>
                <th className="custom-t" style={{color:"white",fontSize:"20px",fontWeight:"600",borderColor:"#F75318"}}>View</th>
              </tr>
              </thead>
              <tbody>
              {
               [].map((doc, index)=>{
                 let statusLabel = this.state.getStatusLabel(doc.status).label;
                 return (
                   <tr>
                   <td>name</td>
                   <td>description</td>
                   <td data-toggle="tooltip" title={doc.address}>{truncate(doc.address, {length: 15})}</td>
                   <td className={statusLabel}>statusLabel</td>
                     <td><a href="" target='_blank'> View </a></td>
                 </tr>
                 );
               })
              }
              </tbody>
            </table>
          </div>
        </div>
        <div className='float-right'>
          <button type="button" className="btn-verify" onClick={this.back}>Back</button>
        </div>
        <div className='clear'> </div>
      </div>
    );
  }

};
