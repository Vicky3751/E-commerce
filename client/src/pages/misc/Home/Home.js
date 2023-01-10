import React, { useEffect } from 'react'
import "../../../assets/styles/Home.css"
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from "react-redux";
import { setIsLoading } from '../../../store/actions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoading(true));
  }, [dispatch])

  return (

    <>
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
    </>
  )
}

export default Home