import React, { Component } from "react";

import Loader from "../common/Loader";
import menu from "../../constants/menu";

import "./forMain.css";
import { UplaodToBlockchainBoxes } from "../upload/uplaodload";
import CalenderBox from "../calander/calenderBox";


import Verifier from "./Verifier";
import Requester from "./Requester";


export default class Main extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      documents: menu.document,
      url: "",
      countPer: {
        rejected: 0,
        verified: 0,
        pending: 0,
      },
      details:"",
      display: "Request",
      count: 0,
      isRequester: 1,
      isVerifier: 0,
      showCreateScreen: false,
      todosCalanders: [
        [
          {
            time: "10:00",
            title: "Dribble shot",
            description: "facebook Brand",
          },
          { time: "13:20", title: "Design", description: "Task Managment" },
        ],
        [
          { time: "10:00", title: "UX Research", description: "Sleep App" },
          { time: "13:20", title: "Design", description: "Task Managment" },
          { time: "10:00", title: "dribble Shot", description: "Meet up" },
        ],
        [
          { time: "10:00", title: "Dribble shot", description: "Meet up" },
          { time: "11:00", title: "design", description: "Mobile App" },
        ],
      ],
    };
  }
  handleCalander = (minusDays = 0) => {
    const selectMonth = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date();
    //get day of the month
    const day = date.getDate();
    const week = date.getDay();
    const year = date.getFullYear();
    const month = selectMonth[date.getMonth()];
    return ` ${month} ${day - minusDays}, ${year}`;
  };


  render() {
    return (
      <div className=" pageGrid">
        <div className="item1"></div>
        {/* ====================================itme2=============== */}
        <div className="item2">
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: "2", color: "rgba(121,50,128)" }}>
              <h3>Hello,Sara</h3>
              <h6>Today is Monday, 20 October 2022</h6>
            </div>
            <div
              style={{
                display: "flex",
                flexGrow: "4",
                padding: "0 0",
                textAlign: "center",
              }}
            >
              <div
                type="text"
                style={{
                  flexGrow: "4",
                  width: "25rem",
                  height: "2rem",
                  border: "none",
                  borderRadius: "0.9rem",
                }}
              ></div>

              <button
                style={{
                  width: "13rem",
                  cursor: "pointer",
                  height: "2.5rem",
                  fontSize: "1.1rem",
                  backgroundColor: "black",
                  borderRadius: "0.5rem",
                  marginRight: "1rem",
                  color: "white",
                }}
                type="button"
              >
                <label htmlFor="filebtn">Add New Project</label>
              </button>
            </div>
            <div>{/* empty div for space dont remove*/}</div>
          </div>

          {/*  div for boxes*/}

          <div onClick={this.list}>
            <br />
            <UplaodToBlockchainBoxes />
          </div>
        </div>

        <div className="item3">
          <div
            className="task-for-today container"
            style={{
              marginTop: "6px",
              width: "auto",
              marginRight: "2px",
              background: "linear-gradient(to right,#4FD77F)",
            }}
          >
            <h3
              style={{
                color: "white",
                width: "auto",
                background: "#004C6E",
                padding: "5px",
                fontWeight: "600",
              }}
            >
              {" "}
              Documents{" "}
            </h3>
            <table className="container" style={{ backgroundColor: "#f5f5f5" }}>
              <thead>
                <tr>
                  <th style={{ fontSize: "20px", fontWeight: "600" }}>
                    <p>
                      Name
                      </p> 
                    </th>
                </tr>
              </thead>
              <tbody>
                {/* get Doc names from profile page*/}
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="Statistics container"
            style={{
              display: "flex",
              backgroundColor: "#f5f5f5",
              marginTop: "10px",
              minHeight: "10rem",
              maxHeight: "100%",
              flexDirection: "column",
              width: "80%",
              padding: "5px",
              overflow: "hidden",
              borderRadius: "0 0 2rem 0",
              opacity: "4",
            }}
          >
            {/* put if condition here for render Requester side the  verifyer side*/}

            {this.state.display === "Request" ? <Requester /> : <Verifier />}
          </div>
        </div>

        <div className="item4">
          <br />
          <div style={{ marginLeft: "30px" }}>
            <h3>Calander</h3>
          </div>
          <div className="calander">
            <CalenderBox
              handleCalander={this.handleCalander}
              minusDays={2}
              todosCalanders={this.state.todosCalanders[0]}
            />
            <CalenderBox
              handleCalander={this.handleCalander}
              todosCalanders={this.state.todosCalanders[1]}
              minusDays={1}
            />
            <CalenderBox
              handleCalander={this.handleCalander}
              todosCalanders={this.state.todosCalanders[2]}
            />
          </div>
        </div>
      </div>
    );
  }
}

{
  /*

     <div className='container'>
        <div className='row align-center'>
          <div className='col-12'>
            <h2 className="custom-h2"> Documents <span className='doc-count'>{this.state.count.total}</span></h2>
          </div>
        </div>
        <div className='row' onClick={this.list}>
      
          <div className='col-4'>
            <div className='card text-white bg-orange mb-3 pointer' >
              <div className='card-header'>Verified</div>
              <div className='card-body'>
                <h5 className='card-title'>
                  {this.state.count.verified}
                </h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated bg-verifyload' role='progressbar'
                       aria-valuemin='0' aria-valuemax='100' style={{width: this.state.countPer.verified}}>
                    {this.state.countPer.verified}
                  </div>
                </div>
              </div>
            </div>
          </div>
       
          <div className='col-4'>
            <div className='card text-white bg-rejected mb-3 pointer' >
              <div className='card-header'>Rejected</div>
              <div className='card-body'>
                <h5 className='card-title'>{this.state.count.rejected}</h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated bg-rejectload'
                       role='progressbar' aria-valuemax='100' style={{width: this.state.countPer.rejected}}>
                    {this.state.countPer.rejected}
                  </div>
                </div>
              </div>
            </div>
          </div>
     
          <div className='col-4'>
            <div className='card text-white bg-pending mb-3 pointer' >
              <div className='card-header'>Pending</div>
              <div className='card-body'>
                <h5 className='card-title'>
                  {this.state.count.total - (this.state.count.rejected + this.state.count.verified)}
                </h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated bg-pendload'
                       role='progressbar' aria-valuemax='100' style={{width: this.state.countPer.pending}}>
                    {this.state.countPer.pending}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        end of container
        {this.state.isRequester && (
          <div>
            <div className='float-right'>
              <button type="button" className="btn-verify" onClick={this.createScreen}>Create</button>
            </div>
            <div className='clear'> </div>
          </div>
          )}
      </div>


*/
}
