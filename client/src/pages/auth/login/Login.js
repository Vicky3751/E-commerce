import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <>
      <div className="row col-md-12 justify-content-center align-items-center full-width full-height">
        <div className="col-md-8">
          <div className='sign-in'>Sign in</div>
          <div className='pb-3'>Dont have an account yet ? <strong>Sign up</strong></div>
          <TextField autoFocus={true} className='col-md-12 text-field' id="standard-basic" label="Email" variant="standard" InputProps={{ disableUnderline: true }} sx={{
            input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "orange" },
            },
            borderBottom: "1px solid #000",
            color: "#000"
          }} />
          <TextField  className='col-md-12 text-field' id="standard-basic" label="Password" variant="standard" InputProps={{ disableUnderline: true }} sx={{
            input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "orange" },
            },
            borderBottom: "1px solid #000",
            color: "#000"
          }} />
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 row justify-content-start align-items-center">
              <Checkbox className='col-md-2' sx={{ color: '#000000', '&.Mui-checked': { color: '#000000', }, }} />
              Remember Me
            </div>
            <div className="col-md-6 text-end">
              <strong>Forgot Password?</strong>
            </div>
          </div>
          <button className="btn btn-primary col-md-12">
            Sign in
          </button>
        </div>
      </div>
    </>
  )
}

export default Login