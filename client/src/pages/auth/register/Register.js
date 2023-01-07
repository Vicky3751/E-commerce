import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@mui/material'
import React from 'react'

const Register = (props) => {

  

  return (
    <>
      <div className="row col-md-12 justify-content-center align-items-center full-width full-height invisible">
        <div className="col-md-8">
          <div className='sign-in'>Sign up</div>
          <div className='pb-3'>Already have an account ? <strong>Sign in</strong></div>
          <TextField autoFocus={true} className='col-md-12 text-field' id="standard-basic" label="Your name" variant="standard" InputProps={{ disableUnderline: true }} sx={{
            input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "orange" },
            },
            borderBottom: "1px solid #000",
            color: "#000"
          }} />
          <TextField className='col-md-12 text-field' id="standard-basic" label="Username" variant="standard" InputProps={{ disableUnderline: true }} sx={{
            input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "orange" },
            },
            borderBottom: "1px solid #000",
            color: "#000"
          }} />
          <TextField autoFocus={true} className='col-md-12 text-field' id="standard-basic" label="Email" variant="standard" InputProps={{ disableUnderline: true }} sx={{
            input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "orange" },
            },
            borderBottom: "1px solid #000",
            color: "#000"
          }} />
          <TextField className='col-md-12 text-field' id="standard-basic" label="Password" variant="standard" InputProps={{ disableUnderline: true }} sx={{
            input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "orange" },
            },
            borderBottom: "1px solid #000",
            color: "#000"
          }} />
          <div className="row justify-content-between align-items-center">
            <div className="col-md-12 d-flex justify-content-start align-items-center flex-wrap">
              <Checkbox className='' sx={{ color: '#000000', '&.Mui-checked': { color: '#000000', }, }} />
              I agree with <a href='/' className='p-2'>Privacy Policy</a > and <a href='/' className='p-2'>Terms of Use</a>
            </div>
          </div>
          <button className="btn btn-primary col-md-12">
            Next
          </button>
        </div>
      </div>


      {/* verify otp */}
      <div className="row col-md-12 justify-content-center align-items-center full-width full-height">
        <div className="col-md-8">
          <div className='sign-in'>Verify</div>
          <div className='pb-3'>OTP has been sent to registered Email ID</div>
          <TextField autoFocus={true} className='col-md-12 text-field' id="standard-basic" label="OTP" variant="standard" InputProps={{ disableUnderline: true }} sx={{
            input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "orange" },
            },
            borderBottom: "1px solid #000",
            color: "#000"
          }} />
          <button className="btn btn-primary col-md-12">
            Register
          </button>
        </div>
      </div>
    </>
  )
}

export default Register