import React from "react";
import './Style.css';



import {NavLink} from 'react-router-dom';
import Logo from '../images/logo.png';



function Navibar() {
  return (
    <>
    <header>
     <div className="container">
       <div className="row">
         <div className="col-lg-4 col-md-4">
         <img src={Logo} alt="logo"/>
         </div>
         <div className="col-lg-8 col-md-8">
              <ul>
                <li><NavLink className="nav_link" to="/" exact>Home</NavLink><NavLink className="nav_link_top" to="/" exact>Welcome!</NavLink><NavLink to="/" exact><i class="fas fa-home"></i></NavLink></li>
                <li><NavLink className="nav_link" to="/news">News</NavLink><NavLink className="nav_link_top" to='/news'>Fresh</NavLink><NavLink to="/news"><i class="fas fa-pencil-alt"></i></NavLink></li>
                <li><NavLink className="nav_link" to="/services">Services</NavLink><NavLink className="nav_link_top" to='/services'>For You</NavLink><NavLink to='/services'><i class="far fa-file-alt"></i></NavLink></li>
                <li><NavLink className="nav_link" to='/products'>Products</NavLink><NavLink className="nav_link_top" to='/products'>The Best</NavLink><NavLink to='/products'><i class="fas fa-cog"></i></NavLink></li>
                <li><NavLink className="nav_link" to='/contacts'>Contacts</NavLink><NavLink className="nav_link_top" to='/contacts'>Ouradderss</NavLink><NavLink to="/contacts"><i class="fas fa-envelope"></i></NavLink></li>
              </ul>
         </div>
       </div>
     </div>    
    </header>
    </>
  );
}

export default Navibar;
