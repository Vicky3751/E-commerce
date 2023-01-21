import React, { useEffect } from 'react'
import "../../../assets/styles/Home.css"
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from "react-redux";
import { setIsLoading } from '../../../store/actions';
import {  TextField } from '@mui/material';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HorizontalScroll from "react-scroll-horizontal";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoading(false));
  }, [dispatch])

  return (

    <>
      {/* carousal  */}
      <div className='carousal-box'>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../../assets/images/product.jpg")}
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
              src={require("../../../assets/images/product1.jpg")}
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
              src={require("../../../assets/images/product2.jpg")}
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

      {/* customer review */}
      <div className="container new-arrival-box">
        <div className='new-arrival-box-text'>
          Customer Review
        </div>
        <HorizontalScroll className="scroll horizontal-scroller" reverseScroll={true}>
          <div className="customer-review-box p-4">
            <div className="customer-review-first-box d-flex justify-content-start align-items-center">
              <img src={require('../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
              <div>
                <div className='customer-review-name'>John</div>
                <div className='d-flex justify-content-center align-items-center'>
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                </div>
              </div>
            </div>
            <div className="customer-review-second-box p-3">
              <div className='customer-review-product-name'>
                Nike Shoes
              </div>
              <div className='customer-review-product-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
              </div>
            </div>
          </div>
          <div className="customer-review-box p-4">
            <div className="customer-review-first-box d-flex justify-content-start align-items-center">
              <img src={require('../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
              <div>
                <div className='customer-review-name'>John</div>
                <div className='d-flex justify-content-center align-items-center'>
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                </div>
              </div>
            </div>
            <div className="customer-review-second-box p-3">
              <div className='customer-review-product-name'>
                Nike Shoes
              </div>
              <div className='customer-review-product-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
              </div>
            </div>
          </div>
          <div className="customer-review-box p-4">
            <div className="customer-review-first-box d-flex justify-content-start align-items-center">
              <img src={require('../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
              <div>
                <div className='customer-review-name'>John</div>
                <div className='d-flex justify-content-center align-items-center'>
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                </div>
              </div>
            </div>
            <div className="customer-review-second-box p-3">
              <div className='customer-review-product-name'>
                Nike Shoes
              </div>
              <div className='customer-review-product-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
              </div>
            </div>
          </div>
          <div className="customer-review-box p-4">
            <div className="customer-review-first-box d-flex justify-content-start align-items-center">
              <img src={require('../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
              <div>
                <div className='customer-review-name'>John</div>
                <div className='d-flex justify-content-center align-items-center'>
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                </div>
              </div>
            </div>
            <div className="customer-review-second-box p-3">
              <div className='customer-review-product-name'>
                Nike Shoes
              </div>
              <div className='customer-review-product-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
              </div>
            </div>
          </div>
          <div className="customer-review-box p-4">
            <div className="customer-review-first-box d-flex justify-content-start align-items-center">
              <img src={require('../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
              <div>
                <div className='customer-review-name'>John</div>
                <div className='d-flex justify-content-center align-items-center'>
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                </div>
              </div>
            </div>
            <div className="customer-review-second-box p-3">
              <div className='customer-review-product-name'>
                Nike Shoes
              </div>
              <div className='customer-review-product-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
              </div>
            </div>
          </div>
          <div className="customer-review-box p-4">
            <div className="customer-review-first-box d-flex justify-content-start align-items-center">
              <img src={require('../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
              <div>
                <div className='customer-review-name'>John</div>
                <div className='d-flex justify-content-center align-items-center'>
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                  <img src={require('../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                </div>
              </div>
            </div>
            <div className="customer-review-second-box p-3">
              <div className='customer-review-product-name'>
                Nike Shoes
              </div>
              <div className='customer-review-product-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
              </div>
            </div>
          </div>
        </HorizontalScroll>
      </div>



      {/* tab navigator  */}
      <div className="tab-nav-box" >
        <Tabs
          defaultActiveKey="best_seller"
          className=" tab-nav"
        >
          <Tab eventKey="best_seller" title="Best Seller">
            <div className="row ">
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="tab-nav-btn-box d-flex justify-content-center align-items-center my-3">
                <button className="btn btn-primary">Load More</button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="new_arrivals" title="New Arrivals">
            <div className="row ">
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product2.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product2.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product2.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product2.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product2.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product2.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product2.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product2.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="tab-nav-btn-box d-flex justify-content-center align-items-center my-3">
                <button className="btn btn-primary">Load More</button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="sale" title="Sale">
            <div className="row ">
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product3.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product3.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product3.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product3.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product3.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product3.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product3.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="new-arrival-car-img">
                  <img src={require("../../../assets/images/product3.jpg")} alt="" />
                </div>
                <div className="new-arrival-car-text">
                  Nike Shoes
                </div>
              </div>
              <div className="tab-nav-btn-box d-flex justify-content-center align-items-center my-3">
                <button className="btn btn-primary">Load More</button>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>


      {/* new arrival card  */}
      <div className="container new-arrival-box">
        <div className='new-arrival-box-text'>
          New Arrivals
        </div>
        <HorizontalScroll className="scroll horizontal-scroller" reverseScroll={true}>
          <div className="new-arrival-card">
            <div className="new-arrival-car-img">
              <img src={require("../../../assets/images/product.jpg")} alt="" />
            </div>
            <div className="new-arrival-car-text">
              Nike Shoes
            </div>
          </div>
          <div className="new-arrival-card">
            <div className="new-arrival-car-img">
              <img src={require("../../../assets/images/product1.jpg")} alt="" />
            </div>
            <div className="new-arrival-car-text">
              Nike Shoes
            </div>
          </div>
          <div className="new-arrival-card">
            <div className="new-arrival-car-img">
              <img src={require("../../../assets/images/product2.jpg")} alt="" />
            </div>
            <div className="new-arrival-car-text">
              Nike Shoes
            </div>
          </div>
          <div className="new-arrival-card">
            <div className="new-arrival-car-img">
              <img src={require("../../../assets/images/product3.jpg")} alt="" />
            </div>
            <div className="new-arrival-car-text">
              Nike Shoes
            </div>
          </div>
          <div className="new-arrival-card">
            <div className="new-arrival-car-img">
              <img src={require("../../../assets/images/product4.jpg")} alt="" />
            </div>
            <div className="new-arrival-car-text">
              Nike Shoes
            </div>
          </div>
          <div className="new-arrival-card">
            <div className="new-arrival-car-img">
              <img src={require("../../../assets/images/product.jpg")} alt="" />
            </div>
            <div className="new-arrival-car-text">
              Nike Shoes
            </div>
          </div>
        </HorizontalScroll>
      </div>

      {/* news letter  */}
      <div className='row newsletter-box'>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className='newsletter-left-box'>
            <div className='newsletter-box-text'>
              Keep Me Updated About BIG Discounts
            </div>
            <TextField autoFocus={true} className='col-md-12 text-field' id="standard-basic" label="Email" variant="standard" InputProps={{ disableUnderline: true }} sx={{
              input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "orange" },
              },
              borderBottom: "1px solid #000",
              color: "#000"
            }} />
            <div className="tab-nav-btn-box d-flex justify-content-end align-items-center">
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img style={{ maxHeight: '100%' }} src={require('../../../assets/images/product.jpg')} width="100%" height="100%" alt="" />
        </div>
      </div>


      {/* grant  */}
      <div className="row grant-box">
        <div className="col-md-3 d-flex justify-content-center align-items-start">
          <i className="bi bi-truck"></i>
          <div className='grant-box-single'>
            Free Shipping
            <div className='grant-box-single-text'>Orders above $200</div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <i className="bi bi-wallet2"></i>
          <div className='grant-box-single'>
            Money Back
            <div className='grant-box-single-text'>30 days guarentee</div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <i className="bi bi-telephone"></i>
          <div className='grant-box-single'>
            Premium Support
            <div className='grant-box-single-text'>Over phone and email</div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <i className="bi bi-shield-check"></i>
          <div className='grant-box-single'>
            Secure Payments
            <div className='grant-box-single-text'>100% guarentee</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home