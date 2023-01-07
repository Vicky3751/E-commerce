import { TextField } from '@mui/material'
import React from 'react'

const ForgotPassword = () => {
  return (
    <>
      <div className="row col-md-12 justify-content-center align-items-center full-width full-height invisible">
        <div className="col-md-8">
          <div className='sign-in'>Forgot Password ?</div>
          <div className='pb-3'> <strong> Enter your Email id</strong></div>
          <TextField autoFocus={true} className='col-md-12 text-field' id="standard-basic" label="Email" variant="standard" InputProps={{ disableUnderline: true }} sx={{
            input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "orange" },
            },
            borderBottom: "1px solid #000",
            color: "#000"
          }} />
          <button className="btn btn-primary col-md-12">
            Send OTP
          </button>
        </div>
      </div>


      {/* verify otp */}
      <div className="row col-md-12 justify-content-center align-items-center full-width full-height ">
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
          <TextField autoFocus={true} className='col-md-12 text-field' id="standard-basic" label="New Password" variant="standard" InputProps={{ disableUnderline: true }} sx={{
            input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "orange" },
            },
            borderBottom: "1px solid #000",
            color: "#000"
          }} />
          <TextField autoFocus={true} className='col-md-12 text-field' id="standard-basic" label="Confirm Password" variant="standard" InputProps={{ disableUnderline: true }} sx={{
            input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "orange" },
            },
            borderBottom: "1px solid #000",
            color: "#000"
          }} />
          <button className="btn btn-primary col-md-12">
            Update Password
          </button>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword