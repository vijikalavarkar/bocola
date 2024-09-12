import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import QuantityDrop from '../components/QuantityDrop/QuantityDrop';
import { MdDelete } from "react-icons/md";
import { Button } from '@mui/material';
import { FaCartPlus } from "react-icons/fa";

const Cart = () => {
    return (
        <>
            <section className="section cartpage">
                <div className="container">
                    <h2 className="hd md-0">Your Cart</h2>
                    <p>There are <span><b>3</b></span> products in your cart</p>
                    
                    
                    <div className="row">
                        {/* Left Section */}
                        <div className="col-md-9 pr-5">


                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="45%">Product</th>
                                            <th width="20%">Price</th>
                                            <th width="16%">Quantity</th>
                                            <th width="13%">Subtotal</th>
                                            <th width="5%" >Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td width="45%">
                                                <Link to="product/1">
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://a.media-amazon.com/images/I/41Hr4Mn6pCL._SX300_SY300_QL70_FMwebp_.jpg" alt="" className="w-100"/>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Field Roast chao cheese creamy original</h6>
                                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
                                                    </div>
                                                </div>
                                                </Link>
                                            </td>
                                            <td width="17%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>$7.33</td>
                                            <td width="17%" style={{ textAlign: 'center', verticalAlign: 'middle' }} ><QuantityDrop /></td>
                                            <td width="15%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>$27.33</td>
                                            <td width="5%"  style={{ textAlign: 'center', verticalAlign: 'middle' }} className='remove'><MdDelete /></td>
                                        </tr>

                                        <tr>
                                            <td width="45%">
                                                <Link to="product/1">
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://a.media-amazon.com/images/I/41Hr4Mn6pCL._SX300_SY300_QL70_FMwebp_.jpg" alt="" className="w-100"/>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Field Roast chao cheese creamy original</h6>
                                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
                                                    </div>
                                                </div>
                                                </Link>
                                            </td>
                                            <td width="20%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>$7.33</td>
                                            <td width="16%" style={{ textAlign: 'center', verticalAlign: 'middle' }} ><QuantityDrop /></td>
                                            <td width="13%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>$27.33</td>
                                            <td width="5%"  style={{ textAlign: 'center', verticalAlign: 'middle' }} className='remove'><MdDelete /></td>
                                        </tr>

                                        <tr>
                                            <td width="45%">
                                                <Link to="product/1">
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://a.media-amazon.com/images/I/41Hr4Mn6pCL._SX300_SY300_QL70_FMwebp_.jpg" alt="" className="w-100"/>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Field Roast chao cheese creamy original</h6>
                                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
                                                    </div>
                                                </div>
                                                </Link>
                                            </td>
                                            <td width="17%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>$7.33</td>
                                            <td width="17%" style={{ textAlign: 'center', verticalAlign: 'middle' }} ><QuantityDrop /></td>
                                            <td width="15%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>$27.33</td>
                                            <td width="5%"  style={{ textAlign: 'center', verticalAlign: 'middle' }} className='remove'><MdDelete /></td>
                                        </tr>

                                        <tr>
                                            <td width="45%">
                                                <Link to="product/1">
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://a.media-amazon.com/images/I/41Hr4Mn6pCL._SX300_SY300_QL70_FMwebp_.jpg" alt="" className="w-100"/>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Field Roast chao cheese creamy original</h6>
                                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
                                                    </div>
                                                </div>
                                                </Link>
                                            </td>
                                            <td width="17%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>$7.33</td>
                                            <td width="17%" style={{ textAlign: 'center', verticalAlign: 'middle' }} ><QuantityDrop /></td>
                                            <td width="15%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>$27.33</td>
                                            <td width="5%"  style={{ textAlign: 'center', verticalAlign: 'middle' }} className='remove'><MdDelete /></td>
                                        </tr>

                                        <tr>
                                            <td width="45%">
                                                <Link to="product/1">
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://a.media-amazon.com/images/I/41Hr4Mn6pCL._SX300_SY300_QL70_FMwebp_.jpg" alt="" className="w-100"/>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Field Roast chao cheese creamy original</h6>
                                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
                                                    </div>
                                                </div>
                                                </Link>
                                            </td>
                                            <td width="17%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>$7.33</td>
                                            <td width="17%" style={{ textAlign: 'center', verticalAlign: 'middle' }} ><QuantityDrop /></td>
                                            <td width="15%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>$27.33</td>
                                            <td width="5%"  style={{ textAlign: 'center', verticalAlign: 'middle' }} className='remove'><MdDelete /></td>
                                        </tr>

                                        <tr>
                                            <td width="45%">
                                                <Link to="product/1">
                                                <div className="d-flex align-items-center cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://a.media-amazon.com/images/I/41Hr4Mn6pCL._SX300_SY300_QL70_FMwebp_.jpg" alt="" className="w-100"/>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Field Roast chao cheese creamy original</h6>
                                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
                                                    </div>
                                                </div>
                                                </Link>
                                            </td>
                                            <td width="17%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>$7.33</td>
                                            <td width="17%" style={{ textAlign: 'center', verticalAlign: 'middle' }} ><QuantityDrop /></td>
                                            <td width="15%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>$27.33</td>
                                            <td width="5%"  style={{ textAlign: 'center', verticalAlign: 'middle' }} className='remove'><MdDelete /></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="col-md-3">
                            <div className='card p-3 cartDetails'>
                                <h4>CART TOTALS</h4>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Subtotal</span>
                                    <span className='ml-auto text-red font-weight-bold'>$1200.31</span>
                                </div>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Shipping</span>
                                    <span className='ml-auto'><b>Free</b></span>
                                </div>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Estimate for</span>
                                    <span className='ml-auto'><b>India</b></span>
                                </div>
                                
                                <div className='d-flex align-items-center mb-3'>
                                    <span>Total</span>
                                    <span className='ml-auto text-red font-weight-bold'>$1200.31</span>
                                </div>

                                <Button className="btn-blue btn-lg btn-big"><FaCartPlus />&nbsp;&nbsp;&nbsp;Add to Cart</Button>



                            </div>
                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}
export default Cart