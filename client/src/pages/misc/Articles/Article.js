import React from 'react'
import { AccessTime, Person, Sms } from '@mui/icons-material';
import { Card } from 'react-bootstrap';
import { Chip, TextField } from '@mui/material';
const Article = () => {
    return (
        <div className='container blog-box'>
            <div className="row">
                <div className="blog-type-text">
                    Fashion
                </div>
                <div className="blog-heading-text">
                    This summer fashion trends
                </div>
                <div className="d-flex" style={{ flexWrap: 'wrap' }}>
                    <div className="blog-about-block d-flex text-muted align-items-center mx-4"><Person className="me-2" /> John </div>
                    <div className="blog-about-block d-flex text-muted align-items-center mx-4"><AccessTime className="me-2" /> 28 June 2022 </div>
                    <div className="blog-about-block d-flex text-muted align-items-center mx-4"><Sms className="me-2" /> 6 </div>
                </div>
                <div className="col-md-9 my-3">
                    <div>
                        <img src={require('../../../assets/images/product.jpg')} width="100%" height="100%" alt="" />
                    </div>
                    <div>
                        <div className="blog-heading-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis obcaecati recusandae reiciendis suscipit eius, temporibus eligendi asperiores! Hic voluptas repellat reprehenderit enim nihil error suscipit magni. Illum maiores impedit vel?
                            Voluptatibus at, optio non eos voluptates fuga sed quas, molestias ea rem error provident corrupti ut vel quibusdam accusamus deserunt facilis ab numquam mollitia consequatur dolorum totam. Quos, dolores repellendus.
                            Dignissimos eum commodi accusantium suscipit minima cumque inventore repellat assumenda deleniti iste maiores quae, distinctio, quam aperiam reprehenderit architecto non dolorum eveniet magni perferendis doloribus, dolor rerum. Possimus, blanditiis obcaecati.
                        </div>
                        <div className="blog-heading-subtext">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis obcaecati recusandae reiciendis suscipit eius, temporibus eligendi asperiores! Hic voluptas repellat reprehenderit enim nihil error suscipit magni. Illum maiores impedit vel?
                            Voluptatibus at, optio non eos voluptates fuga sed quas, molestias ea rem error provident corrupti ut vel quibusdam accusamus deserunt facilis ab numquam mollitia consequatur dolorum totam. Quos, dolores repellendus.
                            Dignissimos eum commodi accusantium suscipit minima cumque inventore repellat assumenda deleniti iste maiores quae, distinctio, quam aperiam reprehenderit architecto non dolorum eveniet magni perferendis doloribus, dolor rerum. Possimus, blanditiis obcaecati.
                        </div>

                    </div>
                    <div className='row mx-0 py-0'>
                        <div className='blog-yml-text'>You might Also like</div>
                        <div className="col-md-4 my-3 px-5">
                            <Card className='blog-card'>
                                <Card.Img variant="top" width="100%" height="250px" src={require('../../../assets/images/product.jpg')} />
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">13 Oct 2022</Card.Subtitle>
                                    <Card.Text className='card-text'>
                                        3 Instagram-Inspired Interior Design Trends to Buy, Like, Immediately
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 my-3 px-5">
                            <Card className='blog-card'>
                                <Card.Img variant="top" width="100%" height="250px" src={require('../../../assets/images/product.jpg')} />
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">13 Oct 2022</Card.Subtitle>
                                    <Card.Text className='card-text'>
                                        3 Instagram-Inspired Interior Design Trends to Buy, Like, Immediately
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 my-3 px-5">
                            <Card className='blog-card'>
                                <Card.Img variant="top" width="100%" height="250px" src={require('../../../assets/images/product.jpg')} />
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">13 Oct 2022</Card.Subtitle>
                                    <Card.Text className='card-text'>
                                        3 Instagram-Inspired Interior Design Trends to Buy, Like, Immediately
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className='blog-comment-input'>
                        <div className='blog-yml-text'>Add a comment</div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Type a comment"
                            multiline
                            rows={3}
                        />
                        <button className="btn btn-primary">Comment</button>
                        <div className='blog-yml-text'>6 comments</div>
                        <div className="comment-box p-3">
                            <div className="customer-review-first-box d-flex justify-content-start align-items-center">
                                <img src={require('../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                <div>
                                    <div className='customer-review-name'>John</div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className="blog-about-block d-flex text-muted align-items-center"> 28 June 2022 </div>

                                    </div>
                                </div>
                            </div>
                            <div className="customer-review-second-box p-3">
                                <div className='customer-review-product-text'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                </div>
                                <div className="blog-about-block d-flex text-muted align-items-end my-2"><i className="bi bi-chat-right-fill mx-2" ></i>Reply </div>
                            </div>
                        </div>
                        <div className="comment-box p-3">
                            <div className="customer-review-first-box d-flex justify-content-start align-items-center">
                                <img src={require('../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                <div>
                                    <div className='customer-review-name'>John</div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className="blog-about-block d-flex text-muted align-items-center"> 28 June 2022 </div>

                                    </div>
                                </div>
                            </div>
                            <div className="customer-review-second-box p-3">
                                <div className='customer-review-product-text'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                </div>
                                <div className="blog-about-block d-flex text-muted align-items-end my-2"><i className="bi bi-chat-right-fill mx-2" ></i>Reply </div>
                            </div>
                        </div>
                        <div className="comment-box p-3">
                            <div className="customer-review-first-box d-flex justify-content-start align-items-center">
                                <img src={require('../../../assets/images/avatar.jpg')} style={{ borderRadius: '50%', marginInline: 15 }} alt="" />
                                <div>
                                    <div className='customer-review-name'>John</div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className="blog-about-block d-flex text-muted align-items-center"> 28 June 2022 </div>

                                    </div>
                                </div>
                            </div>
                            <div className="customer-review-second-box p-3">
                                <div className='customer-review-product-text'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure quos odio quidem facilis numquam. Id, maiores?...
                                </div>
                                <div className="blog-about-block d-flex text-muted align-items-end my-2"><i className="bi bi-chat-right-fill mx-2" ></i>Reply </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-3 my-3">
                    <div className="blog-join-news">
                        <div className="join-news-text">
                            Join Newsletter
                        </div>
                        <div className="join-news-subtext">
                            Enjoy exclusive discounts and offers delivered to your inbox.
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Standard" variant="standard" />
                        </div>
                        <button className="btn btn-primary my-4">Subscribe</button>
                    </div>
                    <div className="blog-join-news">
                        <div className="join-news-text">
                            Tags
                        </div>
                        <div className="join-news-subtext">
                            <Chip label="Chip Outlined" className='m-1 mui-chip' variant="outlined" />
                            <Chip label="Chip Outlined" className='m-1 mui-chip' variant="outlined" />
                            <Chip label="Chip Outlined" className='m-1 mui-chip' variant="outlined" />
                            <Chip label="Chip Outlined" className='m-1 mui-chip' variant="outlined" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Article