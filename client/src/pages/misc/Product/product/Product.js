import { TextField } from '@mui/material';
import React from 'react'
import ImageGallery from "react-image-gallery";
import HorizontalScroll from "react-scroll-horizontal";

const Product = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
    return (
        <>
            <div style={{ width: '100vw', height: '75vh' }}>
                <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    startIndex={2}
                    items={images}
                />
            </div>
            <div className="product-contents container">
                <div className="row">
                    <div className="col-md-8">
                        <div className='new-arrival-box-text'>
                            Nike Shoes
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, neque excepturi, dicta quasi iste eos at sed, labore iusto ea corporis temporibus ducimus fugiat. Eligendi id consectetur consequuntur in odit.
                        </div>
                        <div className='d-flex justify-content-start align-items-center my-3'>
                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                            <div className='product-contents-review-text'>
                                100+ Reviews
                            </div>
                        </div>
                        <div className='new-arrival-box-text d-flex justify-content-start align-items-center'>
                            $200.00
                            <div className='mx-3 product-contents-discount-price'>
                                $500.00
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
                        <div className="filter-heading-text  my-2">
                            Description
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint optio minus aperiam illo deserunt voluptas rem quos neque fuga non magni incidunt placeat velit unde, voluptatibus soluta eligendi perspiciatis.
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                    {/* customer review */}
                    <div className="col-md-12  new-arrival-box" style={{ minWidth: '100%' }} >
                        <div className='new-arrival-box-text'>
                            Questions
                        </div>
                        <HorizontalScroll className="scroll horizontal-scroller" reverseScroll={true}>
                            <div className="customer-review-box p-4">
                                <div className="customer-review-first-box d-flex justify-content-start align-items-center">
                                    <img src={require('../../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                    <div>
                                        <div className='customer-review-name'>John</div>
                                    </div>
                                </div>
                                <div className="customer-review-second-box p-3">
                                    <div className='customer-review-product-name'>
                                        Nike Shoes
                                    </div>
                                    <div className='customer-review-product-text'>
                                        <div>
                                            <strong>Q: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                        </div>
                                        <div>
                                            <strong>R: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="customer-review-box p-4">
                                <div className="customer-review-first-box d-flex justify-content-start align-items-center">
                                    <img src={require('../../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                    <div>
                                        <div className='customer-review-name'>John</div>
                                    </div>
                                </div>
                                <div className="customer-review-second-box p-3">
                                    <div className='customer-review-product-name'>
                                        Nike Shoes
                                    </div>
                                    <div className='customer-review-product-text'>
                                        <div>
                                            <strong>Q: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                        </div>
                                        <div>
                                            <strong>R: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="customer-review-box p-4">
                                <div className="customer-review-first-box d-flex justify-content-start align-items-center">
                                    <img src={require('../../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                    <div>
                                        <div className='customer-review-name'>John</div>

                                    </div>
                                </div>
                                <div className="customer-review-second-box p-3">
                                    <div className='customer-review-product-name'>
                                        Nike Shoes
                                    </div>
                                    <div className='customer-review-product-text'>
                                        <div>
                                            <strong>Q: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                        </div>
                                        <div>
                                            <strong>R: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="customer-review-box p-4">
                                <div className="customer-review-first-box d-flex justify-content-start align-items-center">
                                    <img src={require('../../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                    <div>
                                        <div className='customer-review-name'>John</div>
                                    </div>
                                </div>
                                <div className="customer-review-second-box p-3">
                                    <div className='customer-review-product-name'>
                                        Nike Shoes
                                    </div>
                                    <div className='customer-review-product-text'>
                                        <div>
                                            <strong>Q: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                        </div>
                                        <div>
                                            <strong>R: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="customer-review-box p-4">
                                <div className="customer-review-first-box d-flex justify-content-start align-items-center">
                                    <img src={require('../../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                    <div>
                                        <div className='customer-review-name'>John</div>
                                    </div>
                                </div>
                                <div className="customer-review-second-box p-3">
                                    <div className='customer-review-product-name'>
                                        Nike Shoes
                                    </div>
                                    <div className='customer-review-product-text'>
                                        <div>
                                            <strong>Q: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                        </div>
                                        <div>
                                            <strong>R: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="customer-review-box p-4">
                                <div className="customer-review-first-box d-flex justify-content-start align-items-center">
                                    <img src={require('../../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                    <div>
                                        <div className='customer-review-name'>John</div>
                                    </div>
                                </div>
                                <div className="customer-review-second-box p-3">
                                    <div className='customer-review-product-name'>
                                        Nike Shoes
                                    </div>
                                    <div className='customer-review-product-text'>
                                        <div>
                                            <strong>Q: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                        </div>
                                        <div>
                                            <strong>R: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </HorizontalScroll>
                    </div>
                    {/* customer review */}
                    <div className="col-md-12  new-arrival-box" style={{ minWidth: '100%' }}>
                        <div className='new-arrival-box-text'>
                            Customer Review
                        </div>
                        <HorizontalScroll className="scroll horizontal-scroller" reverseScroll={true}>
                            <div className="customer-review-box p-4">
                                <div className="customer-review-first-box d-flex justify-content-start align-items-center">
                                    <img src={require('../../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                    <div>
                                        <div className='customer-review-name'>John</div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
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
                                    <img src={require('../../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                    <div>
                                        <div className='customer-review-name'>John</div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
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
                                    <img src={require('../../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                    <div>
                                        <div className='customer-review-name'>John</div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
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
                                    <img src={require('../../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                    <div>
                                        <div className='customer-review-name'>John</div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
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
                                    <img src={require('../../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                    <div>
                                        <div className='customer-review-name'>John</div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
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
                                    <img src={require('../../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                    <div>
                                        <div className='customer-review-name'>John</div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
                                            <img src={require('../../../../assets/images/star.jpg')} style={{ borderRadius: '50%', marginRight: 5 }} alt="" />
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
                    {/* new arrival card  */}
                    <div className="col-md-12 new-arrival-box" style={{ minWidth: '100%' }}>
                        <div className='new-arrival-box-text'>
                            New Arrivals
                        </div>
                        <HorizontalScroll className="scroll horizontal-scroller" reverseScroll={true}>
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
                            <img style={{ maxHeight: '100%' }} src={require('../../../../assets/images/product.jpg')} width="100%" height="100%" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product