import React from 'react'
import './App.css';

const Contacts = () => {
  return (
    <>
      <section className="form">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 pr-4 col-md-8">
              <h5>Contact form</h5>
              <form action="" className="message">
                <ul>
                  <li><span>Your Name:</span><input type="text"/></li>
                  <li><span>Your City:</span><input type="text"/></li>
                  <li><span>Your E-mail:</span><input type="text"/></li>
                  <li><span>Your Message:</span><textarea type="text"/></li>
                  <li className="for d-flex justify-content-end mt-3"><button type='reset'>Clear</button><button type="submit">Send</button></li>
                </ul>
              </form>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5>Contacts</h5>
              <ul>
                <li><span>Country:</span><span>USA</span></li>
                <li><span>City:</span><span>San Diego</span></li>
                <li><span>Telephone:</span><span>+354 5635600</span></li>
                <li><span>Email:</span><span style={{color:'green'}}>elenwhite@mail.com</span></li>
              </ul>
              <h5>Miscellaneous</h5>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volupta- tum deleniti atque corrupti quos dolores et quas molestias excep- turi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.</p>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Contacts;
