import React from 'react'
import './App.css';

// Images
import page_img1 from './images/page4_img1.jpg';
import page_img2 from './images/page4_img2.jpg';
import page_img3 from './images/page4_img3.jpg';
import page_img4 from './images/page4_img4.jpg';
import page_img5 from './images/page4_img5.jpg';
import page_img6 from './images/page4_img6.jpg';

const Products = () => {
  return (
    <>
      <section className="products">
        <div className="container">
            <h3 align="center">Products</h3>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <ul className="product_name">
                <span>1</span>
                <h6>Product name</h6>
              </ul>
              <img src={page_img1} alt="page"/>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              <a href="!#">Read more</a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <ul className="product_name">
                <span>2</span>
                <h6>Product name</h6>
              </ul>
              <img src={page_img2} alt="page"/>
              <p>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea.</p>
              <a href="!#">Read more</a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <ul className="product_name">
                <span>3</span>
                <h6>Product name</h6>
              </ul>
              <img src={page_img3} alt="page"/>
              <p>Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
              <a href="!#">Read more</a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <ul className="product_name">
                <span>4</span>
                <h6>Product name</h6>
              </ul>
              <img src={page_img4} alt="page"/>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese- runt mollit anim id est laborum.</p>
              <a href="!#">Read more</a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <ul className="product_name">
                <span>5</span>
                <h6>Product name</h6>
              </ul>
              <img src={page_img5} alt="page"/>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              <a href="!#">Read more</a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <ul className="product_name">
                <span>6</span>
                <h6>Product name</h6>
              </ul>
              <img src={page_img6} alt="page"/>
              <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <a href="!#">Read more</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Products;