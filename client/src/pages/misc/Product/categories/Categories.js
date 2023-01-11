import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import HorizontalScroll from "react-scroll-horizontal";
import "../../../../assets/styles/Product.css"
const Categories = () => {
  return (
    <>

      {/* carousal  */}
      <div className='carousal-box'>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../../../assets/images/product.jpg")}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../../../assets/images/product1.jpg")}
              alt="Second slide"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../../../assets/images/product2.jpg")}
              alt="Third slide"
            />
            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>

      {/* accoridan  */}
      <div className="container my-5 py-5">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Clothes</Accordion.Header>
            <Accordion.Body>
              <HorizontalScroll className="scroll horizontal-scroller my-5" reverseScroll={true}>
                <div className="new-arrival-card">
                  <div className="new-arrival-car-img">
                    <img src={require("../../../../assets/images/product.jpg")} alt="" />
                  </div>
                  <div className="new-arrival-car-text">
                    Nike Shoes
                  </div>
                </div>
                <div className="new-arrival-card">
                  <div className="new-arrival-car-img">
                    <img src={require("../../../../assets/images/product1.jpg")} alt="" />
                  </div>
                  <div className="new-arrival-car-text">
                    Nike Shoes
                  </div>
                </div>
                <div className="new-arrival-card">
                  <div className="new-arrival-car-img">
                    <img src={require("../../../../assets/images/product2.jpg")} alt="" />
                  </div>
                  <div className="new-arrival-car-text">
                    Nike Shoes
                  </div>
                </div>
                <div className="new-arrival-card">
                  <div className="new-arrival-car-img">
                    <img src={require("../../../../assets/images/product3.jpg")} alt="" />
                  </div>
                  <div className="new-arrival-car-text">
                    Nike Shoes
                  </div>
                </div>
                <div className="new-arrival-card">
                  <div className="new-arrival-car-img">
                    <img src={require("../../../../assets/images/product4.jpg")} alt="" />
                  </div>
                  <div className="new-arrival-car-text">
                    Nike Shoes
                  </div>
                </div>
                <div className="new-arrival-card">
                  <div className="new-arrival-car-img">
                    <img src={require("../../../../assets/images/product.jpg")} alt="" />
                  </div>
                  <div className="new-arrival-car-text">
                    Nike Shoes
                  </div>
                </div>
              </HorizontalScroll>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Shoes</Accordion.Header>
            <Accordion.Body>
              <HorizontalScroll className="scroll horizontal-scroller my-5" reverseScroll={true}>
                <div className="new-arrival-card">
                  <div className="new-arrival-car-img">
                    <img src={require("../../../../assets/images/product.jpg")} alt="" />
                  </div>
                  <div className="new-arrival-car-text">
                    Nike Shoes
                  </div>
                </div>
                <div className="new-arrival-card">
                  <div className="new-arrival-car-img">
                    <img src={require("../../../../assets/images/product1.jpg")} alt="" />
                  </div>
                  <div className="new-arrival-car-text">
                    Nike Shoes
                  </div>
                </div>
                <div className="new-arrival-card">
                  <div className="new-arrival-car-img">
                    <img src={require("../../../../assets/images/product2.jpg")} alt="" />
                  </div>
                  <div className="new-arrival-car-text">
                    Nike Shoes
                  </div>
                </div>
                <div className="new-arrival-card">
                  <div className="new-arrival-car-img">
                    <img src={require("../../../../assets/images/product3.jpg")} alt="" />
                  </div>
                  <div className="new-arrival-car-text">
                    Nike Shoes
                  </div>
                </div>
                <div className="new-arrival-card">
                  <div className="new-arrival-car-img">
                    <img src={require("../../../../assets/images/product4.jpg")} alt="" />
                  </div>
                  <div className="new-arrival-car-text">
                    Nike Shoes
                  </div>
                </div>
                <div className="new-arrival-card">
                  <div className="new-arrival-car-img">
                    <img src={require("../../../../assets/images/product.jpg")} alt="" />
                  </div>
                  <div className="new-arrival-car-text">
                    Nike Shoes
                  </div>
                </div>
              </HorizontalScroll>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  )
}

export default Categories