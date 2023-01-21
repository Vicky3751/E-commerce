import { Add, Remove } from '@mui/icons-material'
import { Divider, IconButton, TextField } from '@mui/material'
import React from 'react'
import { Card } from 'react-bootstrap'
import DataTable from '../../../components/DataTable'

const Cart = () => {
    //quantity 
    const [quantity, setQuantity] = React.useState(1)

    const quantityIncrement = () => {
        setQuantity(quantity + 1)
    }
    const quantityDecrement = () => {
        setQuantity(quantity - 1)
    }

    const quantityChange = (e) => {
        // console.log(e.target.value)
        setQuantity(parseInt(e.target.value))
    }
    const columns = [
        {
            name: "name",
        },
        {
            name: "Image",
        },
        {
            name: "Price",
        },
        {
            name: "Quantity",
        },
    ];
    const data = [
        {
            name: "John Walsh", Image: <img width={100} height={100} src={require('../../../assets/images/product.jpg')} alt="" />, Price: '$200', Quantity: <div className="quantity d-flex  justify-content-around align-items-center" style={{ maxWidth: '150px', margin: 'auto' }}>
                <div className="minus-plus-box">
                    <IconButton className="btn" onClick={quantityDecrement} >
                        <Remove />
                    </IconButton>
                </div>
                <div className="quantitiy-input">
                    <input type="number" min={0} value={quantity} onChange={(e) => quantityChange(e)} />
                </div>
                <div className="minus-plus-box">
                    <button className="btn" onClick={quantityIncrement}>
                        <Add />
                    </button>
                </div>
            </div>
        },
        { name: "John Walsh", Image: <img width={100} height={100} src={require('../../../assets/images/product.jpg')} alt="" />, Price: '$200', Quantity: "2" },
        { name: "John Walsh", Image: <img width={100} height={100} src={require('../../../assets/images/product.jpg')} alt="" />, Price: '$200', Quantity: "2" },
    ];
    return (
        <div className='container'>
            <div className="row justify-content-center align-items-center">
                <div className='my-account-heading col-md-12 mb-2 text-center'>
                    Cart
                </div>
                <div className="col-md-6 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam temporibus fugiat laborum, nobis tenetur aperiam odit dolores
                </div>
                <div className="col-md-10 my-5 pt-5">
                    <DataTable columns={columns} data={data} />
                </div>
                <div className="col-md-6 row my-5">
                    <div className="col-md-6">
                        <div className='cart-coupon-text'>
                            Have a Coupon ?
                        </div>
                        <div className='cart-coupon-subtext'>
                            Add the coupon and get an Instant discount
                        </div>
                    </div>
                    <div className="col-md-6">
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                    </div>
                </div>
                <div className='my-account-heading col-md-12 mt-5 mb-2 text-center'>
                    Cart Summary
                </div>
                <Divider variant="inset" component="span" className='my-3' />
                <Card className='my-2 p-2 col-md-4 mb-5 pb-5'>
                    <div className="subtotal d-flex justify-content-between px-3 py-3">
                        <div className="subtotal-text">
                            Subtotal
                        </div>
                        <div className="subtotal-ammount">
                            $160.00
                        </div>
                    </div>
                    <div className="subtotal d-flex justify-content-between px-3 py-3">
                        <div className="subtotal-text">
                            Delivery Charge
                        </div>
                        <div className="subtotal-ammount">
                            $160.00
                        </div>
                    </div>
                    <div className="subtotal d-flex justify-content-between px-3 py-3">
                        <div className="subtotal-text">
                            Tax (GST + CGST)
                        </div>
                        <div className="subtotal-ammount">
                            $160.00
                        </div>
                    </div>
                    <div className="divider">

                    </div>
                    <div className="total d-flex justify-content-between px-3 py-3">
                        <div className="total-text">
                            Total
                        </div>
                        <div className="total-ammount">
                            $160.00
                        </div>
                    </div>
                    <button className="btn btn-primary mx-3 my-2 py-3">
                        Checkout
                    </button>
                </Card>
            </div>
        </div>
    )
}

export default Cart