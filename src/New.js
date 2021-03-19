import React from "react";
import "./App.css";

// Images
import img1 from "./images/page2_img1.jpg";
import img2 from "./images/page2_img2.jpg";
import img3 from "./images/page2_img3.jpg";
import img4 from "./images/page1_img1.jpg";

const New = () => {
  return (
    <>
      <section className="news">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="new_body mb-3">
                <li>
                  <p>28</p> <p>06</p>{" "}
                </li>
                <h6>Duis aute irure dolor in reprehenderit </h6>
              </ul>
              <ul className="news_info">
                <div>
                  <img src={img1} alt="news" />
                </div>
                <div className="ml-sm-2 ml-lg-4">
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit.
                  </p>
                  <a href="!#">Read more</a>
                </div>
              </ul>
            </div>
            <div className="col-lg-12">
              <ul className="new_body mb-3">
                <li>
                  <p>28</p> <p>06</p>{" "}
                </li>
                <h6>Duis aute irure dolor in reprehenderit </h6>
              </ul>
              <ul className="news_info">
                <div>
                  <img src={img2} alt="news" />
                </div>
                <div className="ml-sm-2 ml-lg-4">
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit.
                  </p>
                  <a href="!#">Read more</a>
                </div>
              </ul>
            </div>
            <div className="col-lg-12">
              <ul className="new_body mb-3">
                <li>
                  <p>28</p> <p>06</p>{" "}
                </li>
                <h6>Duis aute irure dolor in reprehenderit </h6>
              </ul>
              <ul className="news_info">
                <div>
                  <img src={img4} width="180" alt="news" />
                </div>
                <div className="ml-sm-2 ml-lg-4">
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit.
                  </p>
                  <a href="!#">Read more</a>
                </div>
              </ul>
            </div>
            <div className="col-lg-12">
              <ul className="new_body mb-3">
                <li>
                  <p>28</p> <p>06</p>{" "}
                </li>
                <h6>Duis aute irure dolor in reprehenderit </h6>
              </ul>
              <ul className="news_info">
                <div>
                  <img src={img3} alt="news" />
                </div>
                <div className="ml-sm-2 ml-lg-4">
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit.
                  </p>
                  <a href="!#">Read more</a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default New;
