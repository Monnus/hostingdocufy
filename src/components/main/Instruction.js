import React, { Component } from "react";
import Marquee from "react-fast-marquee";
import part0 from "../../../src/assets/images/Learn/part0.png";
import "./instruction.css";
import { HiOutlineDocument } from "react-icons/hi";
import { BiCertification } from "react-icons/bi";


export default class Instruction extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        {/*  */}
        <div className="hero">
          <div className="content">
            <h1>First Time For Everything</h1>
            <p>
              First acquire a blockchain wallet from a wallet provider we
              recommand Metamask <br></br>
              Metamask will turn your browser in to a blockchain client, this
              will allow interaction with the blockchain network
            </p>
            <a href="https://metamask.io/" className="button">
              Get wallet
            </a>
          </div>
          <div className="img1">
            <img src={part0} alt="girl" className="girl" height={200} />
          </div>
        </div>
        <hr className="new1" />
        <div className="split">
          <p>Documents we work with</p>
          <Marquee className="Marquee">
            <HiOutlineDocument className="grcert" />
            <h4>Matric Certificate</h4>
            <BiCertification className="grcert" />
            <h4>Higher Certificate</h4>
            <HiOutlineDocument className="grcert" />
            <h4> Diploma Certificate </h4>
            <BiCertification className="grcert" />
            <h4> Degree Certificate </h4>
            <HiOutlineDocument className="grcert" />
            <h4>Honours Certificate</h4>
            <BiCertification className="grcert" />
            <h4>Doctorate Certificate</h4>
          </Marquee>
        </div>

        {/*  */}
        <div className="toppest">
          <div className="information">
            <h4>THE LEADING DOCUMENT VERIFICATION PLATFORM</h4>
            <h1>Learn more on how to navigate and utilise the app</h1>
            <p>
              see demonstartion on how smart contacts automatically execute{" "}
            </p>
          </div>
          <div className="img2a">
            {/* <img src={video} alt='video' height={400}/> */}
            <div className="video-responsive">
              <iframe
                width="480"
                height="480"
                src={`https://www.youtube.com/embed/o3A5GqVRG6o`}
                // src={`https://youtu.be/o3A5GqVRG6o`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            <h1>How we help our clients</h1>
            {/* <IconButton icon={<SortDownIcon />} className='buttonStyle' /> */}
            {/* <BsArrowDownCircle/> */}
          </div>

          {/* <div className='divide'>
            <div className='one'>
            <h5>Document Verification</h5>
            <h3>Work with a blockchain advisor to align
            your document verificaiton with your enterprise goals.
            </h3>
            <a href='/login' className='button4' >Get started</a>
            <button href='/' className='button3'>Learn more</button>
            </div>

            <div className='two'>

            <img src={miss} alt='video' className='miss'/>

            </div>
        </div>

        <div className='divide1'>
            

            <div className='two1'>

            <img src={equity} alt='equity' className='equity'/>

            </div>
            <div className='one1'>
            <h5>Validation & Fraud Prevention</h5>
            <h3>Get your documents validated and temper proof
             backed by smart contracts
            </h3>

            <a href='/login' className='button8'>Get started</a>

            <button href='/' className='button7'>Learn more</button>

            </div>
        </div>

        <div className='divide'>
            <div className='one'>
            <h5>Distributed ledger</h5>
            <h3> your documents are deployed with smart contract
             upon verificaiton and validation sent to a distributed ledger
            </h3>


            <a href='/login' className='button4'>Get started</a>
            <button href='/' className='button3'>Learn more</button>
            </div>

            <div className='two'>

            <img src={man} alt='man' className='man'/>

            </div>
        </div> */}

          <div className="divide4">
            <div className="one4">
              <h6>WHY DOCUIFY</h6>
              <h1>
                DIGTIAL VERIFICATION <br></br> & <br></br>DIGTIAL FINGERPRINT
              </h1>
            </div>

            <div className="two4">
              <h3>We put your documents first</h3>
              <p>
                Our platform has capabilites to verify and validate documents
                <br></br>it fits into your enterprise picture.
              </p>
              <h3>You don’t need to understand smart contracts</h3>
              <p>
                We help you seal your documents through blockchain technology
                <br></br>through smart contracts for digital finger printing
              </p>

              <h3>We store your documents on the blockchain</h3>
              <p>
                Comprehensive document storage by means of the blockchain{" "}
                <br></br>
                nodes and the inter-plantery file system
              </p>
            </div>
          </div>
        </div>

        {/* Marquee */}

        <div className="back-color">
          <div className="show">
            <h6>TESTIMONIALS</h6>
            <h1>What our clients say</h1>
          </div>

          <Marquee className="Marquee1">
            <div className="marq">
              <p>
                {" "}
                "I realized I’ve been sorely <br></br>needing your advisory
                services. So excited to work <br></br>with you."
              </p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <h6>Senior Engineer</h6>
              <h6>Gusto</h6>
            </div>

            <div className="marq">
              <p>
                "What I found most <br></br> comforting was that this <br></br>
                would allow all our employees, <br></br>not just the executives
                or <br></br>
                senior ones, an opportunity to <br></br>have the option to
                digitally fingerprint <br></br>
                important business documentation"{" "}
              </p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <h6>Dan Sinner</h6>
              <h6>Chief Customer Officer at Happy Money</h6>
            </div>

            <div className="marq">
              <p>
                {" "}
                "I realized I’ve been sorely <br></br>needing your advisory
                services. to validate and authenticate my documents <br></br>
                with your technology."
              </p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <h6>Senior Engineer</h6>
              <h6>Gusto</h6>
            </div>

            <div className="marq">
              <p>
                {" "}
                "Docuify was one of the only <br></br> places I could find that
                could <br></br>
                validate my certificate <br></br>on using smart contracts."
              </p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <h6>Amanda</h6>
              <h6>Early HR employee at pre-IOP startup</h6>
            </div>

            <div className="marq">
              <p>
                {" "}
                "Docuify felt like the safest <br></br>option. There is upside{" "}
                <br></br>
                and almost no downside, and I <br></br>might as well play it
                safe."
              </p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <h6>Victor</h6>
              <h6>Leading University Admin</h6>
            </div>

            <div className="marq">
              <p>
                "I feel like a small fish in a big <br></br>pond with wealth
                advisors.<br></br>
                Secfi is exactly what I've been <br></br> looking for. You get
                me. You <br></br>
                know equity. And you make <br></br>my life easy."
              </p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <h6>Emma</h6>
              <h6>Docuify client</h6>
            </div>
          </Marquee>
        </div>
      </div>
    );
  }
}
