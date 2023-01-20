import { TextField } from '@mui/material'
import Accordion from 'react-bootstrap/Accordion';
import React from 'react'
import { Card } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <div className="container row justify-content-center align-items-center">
          <div className='my-account-heading col-md-12 mb-2 text-center'>
            Contact Us
          </div>
          <div className="col-md-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam temporibus fugiat laborum, nobis tenetur aperiam odit dolores
          </div>
        </div>

        <div className="row justify-content-center my-5 py-5">
          <div className="col-md-10">
            <Card className="px-5">
              <div className='new-arrival-box-text'>
                Get In Touch
              </div>
              <div className="row">
                <div className="col-md-6 my-2">
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div className="col-md-6 my-2">
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div className="col-md-12 my-2">
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div className="col-md-12 my-2">
                  <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                  />
                </div>
                <div className="col-md-12 my-2">
                  <button className="btn btn-primary width-100 py-3">
                    Send Message
                  </button>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-10 my-5 py-5">
            <div className='new-arrival-box-text'>
              Frequently asked
            </div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs