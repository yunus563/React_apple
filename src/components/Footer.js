import React from "react";
import './Style.css';

function footer() {
  
  return(
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h4>Why Us?</h4>
              <ul>
                <li><i class="fas fa-angle-right"></i><a href="#!">At vero eos et accusamus</a></li>
                <li><i class="fas fa-angle-right"></i><a href="#!">Dmet, consectetur</a></li>
                <li><i class="fas fa-angle-right"></i><a href="#!">Adipisicing elit eiusmod</a></li>
                <li><i class="fas fa-angle-right"></i><a href="#!">Tempor intrinsic ut</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h4>Address</h4>
              <ul>
                <li><a href="#!">Country:     USA</a></li>
                <li><a href="#!">City: San Diego </a></li>
                <li><a href="#!">Phone: 8 800 154-45-67</a></li>
                <li><a href="#!" style={{color:'white'}}>Email: progress@mail.com</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h4>Follow Us</h4>
              <ul className="logo">
                <li><i class="fab fa-facebook-square"></i><a href="#!">Facebook</a></li>
                <li><i class="fab fa-twitter-square"></i><a href="#!">Twitter</a></li>
                <li><i class="fab fa-linkedin"></i><a href="#!">Linkedin</a></li>
                <li><i class="fab fa-delicious"></i><a href="#!">Delicious</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h4>News letter</h4>
              <form action="" className="form">
                <input type="text" style={{color:'black'}} placeholder="Type Your Email Her"/>
                <button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  )  
  
}

export default footer;
