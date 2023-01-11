import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import MultiRangeSlider from '../../../../components/MultiRangeSlider';
import Accordion from 'react-bootstrap/Accordion';
const Products = () => {
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



            <div className="products-box container">
                <div className="row products-box-row justify-content-center align-items center">
                    <div className="col-md-2 m-0 p-0">
                        <Accordion  className='filter-accordian'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Filter</Accordion.Header>
                                <Accordion.Body>
                                    <div className="category-section">
                                        <div className="filter-heading-text  my-2">
                                            Category
                                        </div>
                                        <div className="filter-heading-subtext">
                                            Household and appliances
                                        </div>
                                        <div className="filter-heading-subtext">
                                            Clothes
                                        </div>
                                        <div className="filter-heading-subtext">
                                            Shoes
                                        </div>
                                    </div>

                                    <div className="color-section m-0 p-0">
                                        <div className="filter-heading-text  my-2">
                                            Color
                                        </div>
                                        <div className="colors d-flex" style={{ flexWrap: 'wrap' }} >
                                            <div className='color-filter-colors border m-2' style={{ backgroundColor: 'red' }}></div>
                                            <div className='color-filter-colors border m-2' style={{ backgroundColor: 'green' }}></div>
                                            <div className='color-filter-colors border m-2' style={{ backgroundColor: 'black' }}></div>
                                            <div className='color-filter-colors border m-2' style={{ backgroundColor: 'white' }}></div>
                                            <div className='color-filter-colors border m-2' style={{ backgroundColor: 'yellow' }}></div>
                                        </div>
                                    </div>
                                    <div className="color-section m-0 p-0">
                                        <div className="filter-heading-text  my-2">
                                            Size
                                        </div>
                                        <div className="colors d-flex" style={{ flexWrap: 'wrap' }} >
                                            <div className='color-filter-colors border m-2 d-flex justify-content-center align-items-center'><span>S</span></div>
                                            <div className='color-filter-colors border m-2 d-flex justify-content-center align-items-center'><span>M</span></div>
                                            <div className='color-filter-colors border m-2 d-flex justify-content-center align-items-center'><span>L</span></div>
                                            <div className='color-filter-colors border m-2 d-flex justify-content-center align-items-center'><span>XL</span></div>
                                            <div className='color-filter-colors border m-2 d-flex justify-content-center align-items-center'><span>XXL</span></div>
                                        </div>
                                    </div>
                                    <div className="color-section m-0 p-0">
                                        <div className="filter-heading-text  my-2">
                                            Price
                                        </div>
                                        <div className="colors d-flex" style={{ height: '100px' }} >
                                            <MultiRangeSlider
                                                min={0}
                                                max={10000}
                                                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                                            />
                                        </div>
                                    </div>

                                    <div className="color-section m-0 p-0">
                                        <div className="filter-heading-text  my-2">
                                            Customer Reviews
                                        </div>
                                        <div className="colors">
                                            <div className='customer-review-box m-2 d-flex justify-content-start align-items-center'>
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/halfstar.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                4+
                                            </div>
                                            <div className='customer-review-box m-2 d-flex justify-content-start align-items-center'>
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/emptystar.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                4
                                            </div>
                                            <div className='customer-review-box m-2 d-flex justify-content-start align-items-center'>
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/emptystar.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/emptystar.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                3
                                            </div>
                                            <div className='customer-review-box m-2 d-flex justify-content-start align-items-center'>
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/emptystar.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/emptystar.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/emptystar.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                2
                                            </div>
                                            <div className='customer-review-box m-2 d-flex justify-content-start align-items-center'>
                                                <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/emptystar.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/emptystar.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/emptystar.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                <img src={require('../../../../assets/images/emptystar.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                                1
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-section">
                                        <div className="filter-heading-text  my-2">
                                            Availability
                                        </div>
                                        <div className="filter-heading-subtext">
                                            In stock
                                        </div>
                                        <div className="filter-heading-subtext">
                                            Out of stock
                                        </div>
                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    {/* <div className="filter-text my-4">
                        Filter
                    </div> */}

                    <div className="col-md-10 row">
                        <div className="col-md-12">
                            Sort by
                        </div>
                        <div className="col-md-3">Hello</div>
                        <div className="col-md-3">Hello</div>
                        <div className="col-md-3">Hello</div>
                        <div className="col-md-3">Hello</div>
                        <div className="col-md-3">Hello</div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Products