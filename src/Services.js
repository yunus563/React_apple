import React from 'react'
import './App.css';

// Images
import img1 from './images/page3_img1.gif';
import img2 from './images/page3_img2.gif';
import img3 from './images/page3_img3.gif';
import img4 from './images/page3_img4.gif';
import img5 from './images/page3_img5.gif';
import img6 from './images/page3_img6.gif';


const Services = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <h4 align="start">Overview of Our Main Business Courses</h4>
          <div className="row pt-5">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="left">
                <img src={img1} alt="pages"/>
              </div>
              <div className="right ml-4">
                <h6>Clients Relationships</h6>
                <p>Atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="left">
                <img src={img2} alt="pages"/>
              </div>
              <div className="right ml-4">
                <h6>Strategic Planning</h6>
                <p>Similique sunt in culpa harum quidem rerum facilis est et expedita distinctio namlibero tempore, cum soluta.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="left">
                <img src={img3} alt="pages"/>
              </div>
              <div className="right ml-4">
                <h6>Strategic Planning</h6>
                <p>Nobis eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="left">
                <img src={img4} alt="pages"/>
              </div>
              <div className="right ml-4">
                <h6>Strategic Planning</h6>
                <p>assumenda est, omnis dolor repellendus. Temporibus autem quibusdam aut officiis debitis aut.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="left">
                <img src={img5} alt="pages"/>
              </div>
              <div className="right ml-4">
                <h6>Strategic Planning</h6>
                <p>Rerum necessitatibus saepe eveniet et voluptates repu- diandae sint et molestiae non recusandae.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="left">
                <img src={img6} alt="pages"/>
              </div>
              <div className="right ml-4">
                <h6>Strategic Planning</h6>
                <p>At vero eos et accusamus et iusto odio dignissimo ducimu qui blanditiis praesentium voluptatum deleniti.</p>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Services;
