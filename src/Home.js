import React from "react";
import "./App.css";
import { Carousel } from "react-bootstrap";


import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import imgMen from "./images/page1_img1.jpg";

function Home() {
  return (
    <>
      {/* Section top-- */}
      <section className="section_header">
        <div className="container-fluid">
          <Carousel fade interval={3000}>
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={img4} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      {/* Card Body-- */}
      <section className="body_card">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h2>
                <span>A</span> Business Planning
              </h2>
              <p>
                Progress is one of free website templates created by
                TemplateMonster.com, optimized for 1024x768 res.
              </p>
              <a href="#!">Read more</a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h2>
                <span>A</span> Business Strategies
              </h2>
              <p>
              Progress is one of free website templates created by
                TemplateMonster.com, optimized for 1024x768 res.
              </p>
              <a href="#!">Read more</a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h2>
                <span>A</span> Powerful Analytics
              </h2>
              <p>
              PSD source files are available for free for registered members. The basic package is available for anyone.
              </p>
              <a href="#!">Read more</a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h2>
                <span>A</span> Worldwide Solutions
              </h2>
              <p>
                Progress is one of free website templates created by
                TemplateMonster.com, optimized for 1024x768 res.
              </p>
              <a href="#!">Read more</a>
            </div>
          </div>
        </div>
      </section>
      {/* Section img-- */}
      <section className="info">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <h2>Welcome! dear visitor!</h2>
              <div className="top">
                <div className="right">
                  <img src={imgMen} alt="Man" />
                </div>
                <div className="left">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa.{" "}
                    <br /> Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus, omnis voluptas assumenda est, omnis
                    dolor repellendus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <h3>Testimonials</h3>
              <div className="testimonials">
                <div id="testimonials">
                  <ul>
                    <li>
                      <div>
                        “Nam libero tempore, cum soluta nobis eligendi quo minus
                        quod maxime placeat facere.”
                      </div>
                      <span>
                        {" "}
                        <strong>James Coloway,</strong> <br />
                        Director
                      </span>
                    </li>
                    <li>
                      <div>
                        “Nam libero tempore, cum soluta nobis eligendi quo minus
                        quod maxime placeat facere.”
                      </div>
                      <span>
                        {" "}
                        <strong>James Coloway,</strong> <br />
                        Director
                      </span>
                    </li>
                    <li>
                      <div>
                        “Nam libero tempore, cum soluta nobis eligendi quo minus
                        quod maxime placeat facere.”
                      </div>
                      <span>
                        {" "}
                        <strong>James Coloway,</strong> <br />
                        Director
                      </span>
                    </li>
                    <li>
                      <div>
                        “Nam libero tempore, cum soluta nobis eligendi quo minus
                        quod maxime placeat facere.”
                      </div>
                      <span>
                        {" "}
                        <strong>James Coloway,</strong> <br />
                        Director
                      </span>
                    </li>
                  </ul>
                </div>
                <a href="#!" className="up">
                  <i class="fas fa-angle-up"></i>
                </a>
                <a href="#!" className="down">
                  <i class="fas fa-angle-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
    </>
  );
}

export default Home;
