import { TextField } from '@mui/material'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Articles = () => {
  return (
    <>
      <div className="container">
        <div className="container row justify-content-center align-items-center">
          <div className='my-account-heading col-md-12 mb-2 text-center'>
            Blogs
          </div>
          <div className="col-md-6 row justify-content-center align-items center">
            <div className="col-md-8">
              <TextField className='text-field col-md-5' id="standard-basic" label="Search for Blog" variant="standard" InputProps={{ disableUnderline: true }} sx={{
                input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "orange" },
                },
                borderBottom: "1px solid #000",
                color: "#000"

              }} />
            </div>
            {/* <button className="btn btn-primary col-md-2">
              Search
            </button> */}
          </div>
        </div>
        <div className="row justify-content-start align-items-start my-5 py-5">
          <div className="col-md-3 my-3 px-5">
            <Link to="/article/1234" className='blog-card'>
              <Card.Img variant="top" width="100%" height="250px" src={require('../../../assets/images/product.jpg')} />
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">13 Oct 2022</Card.Subtitle>
                <Card.Text className='card-text'>
                  3 Instagram-Inspired Interior Design Trends to Buy, Like, Immediately
                </Card.Text>
              </Card.Body>
            </Link>
          </div>
          <div className="col-md-3 my-3 px-5">
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
          <div className="col-md-3 my-3 px-5">
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
          <div className="col-md-3 my-3 px-5">
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
          <div className="col-md-3 my-3 px-5">
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
          <div className="col-md-3 my-3 px-5">
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
      </div>
    </>
  )
}

export default Articles