import React from 'react'
import Header from "../../common/Header"
import Footer from "../../common/Footer"
import { SearchOff } from '@mui/icons-material'
import { IconButton } from '@mui/material'
const NotFound = () => {
    return (
        <>
            <Header />
            <IconButton style={{ width: '100%' }}>
                <SearchOff style={{ fontSize: 150 }} />
            </IconButton>
            <div className="text-center" style={{ fontSize: 50, fontWeight: 600 }}>
                404 Page Not Found
            </div>
            <div className="text-center" style={{ fontSize: 24 }}>
                The page you're looking for isn't available.Try to search again or use the go back button below.
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="btn btn-primary" style={{ paddingBlock: '10px !important' }}>
                    Go Back Home
                </button>
            </div>
            <Footer />
        </>
    )
}

export default NotFound