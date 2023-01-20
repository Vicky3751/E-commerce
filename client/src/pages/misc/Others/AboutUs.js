import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import "../../../assets/styles/InfiniteScroll.css"
const AboutUs = () => {
  return (
    <>
      <div>
        <img width="100%" style={{ maxHeight: '90vh' }} src={require('../../../assets/images/product4.jpg')} alt="" />
      </div>
      <div className="about-us-text">
        Our goal is to offer you the exclusive hand-picked products that will make your soul shine.
      </div>
      <div className="scrollbody my-5">
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100%" width="100%" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100%" width="100%" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100%" width="100%" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100%" width="100%" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100%" width="100%" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100%" width="100%" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100%" width="100%" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100%" width="100%" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100%" width="100%" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100%" width="100%" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100%" width="100%" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100%" width="100%" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100%" width="100%" alt="" />
            </div>
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100%" width="100%" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row m-5 py-5">
        <div className="col-md-7 row my-2">
          <div className="col-md-6 my-2">
            <div className="about-us-two-image-section">
              <img width="100%" style={{ maxHeight: '50vh' }} src={require('../../../assets/images/product3.jpg')} alt="" />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="about-us-two-image-section">
              <img width="100%" style={{ maxHeight: '50vh' }} src={require('../../../assets/images/product3.jpg')} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-5 row align-items-center align-content-center">
          <div className="blog-type-text col-md-12">
            Fashion
          </div>
          <div className='new-arrival-box-text col-md-12'>
            Products made with love.
          </div>
          <div className="col-md-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam temporibus fugiat laborum, nobis tenetur aperiam odit dolores
          </div>
        </div>
      </div>
      <div className="row m-5 py-5">
        <div className="col-md-5 row align-items-center align-content-center">
          <div className="blog-type-text col-md-12">
            Fashion
          </div>
          <div className='new-arrival-box-text col-md-12'>
            Products made with love.
          </div>
          <div className="col-md-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam temporibus fugiat laborum, nobis tenetur aperiam odit dolores
          </div>
        </div>
        <div className="col-md-7 row my-2">
          <div className="col-md-6 my-2">
            <div className="about-us-two-image-section">
              <img width="100%" style={{ maxHeight: '50vh' }} src={require('../../../assets/images/product3.jpg')} alt="" />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="about-us-two-image-section">
              <img width="100%" style={{ maxHeight: '50vh' }} src={require('../../../assets/images/product3.jpg')} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* customer review */}
      <div className="container col-md-10 new-arrival-box">
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

      {/* news letter  */}
      <div className='row newsletter-box'>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className='newsletter-left-box'>
            <div className="blog-type-text col-md-12">
              Fashion
            </div>
            <div className='new-arrival-box-text col-md-12'>
              Products made with love.
            </div>
            <div className="col-md-12">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam temporibus fugiat laborum, nobis tenetur aperiam odit dolores
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

export default AboutUs