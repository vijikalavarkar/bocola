import { IoShirtOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdCurrencyExchange } from "react-icons/md";
import { Link } from "@mui/material";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
    return(
        <>
            <footer>
                <div className="container">
                    <div className="topInfo row">
                        <div className="col d-flex align-items-center">
                            <span><IoShirtOutline /></span>
                            <span className="ml-2">Everyday fresh products</span>
                        </div>
                        <div className="col d-flex align-items-center">
                            <span><LiaShippingFastSolid /></span>
                            <span className="ml-2">Free delevery for order over $70</span>
                        </div>
                        <div className="col d-flex align-items-center">
                            <span><RiDiscountPercentLine /></span>
                            <span className="ml-2">Daily mega discounts</span>
                        </div>
                        <div className="col d-flex align-items-center">
                            <span><MdCurrencyExchange /></span>
                            <span className="ml-2">Best price on the market</span>
                        </div>
                    </div>


                    <div className="row mt-5 linkWrap">
                        <div className="col">
                            <h5>FRUIT AND VEGITABLES</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h5>BREAKFAST AND DAIRY</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h5>MEAT AND SEAFOOD</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h5>BAVERAGES</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h5>BREADS AND BEKARY</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                                <li><Link to="#">Fresh Vegitables</Link></li>
                            </ul>
                        </div>
                    </div>



                    <div className="copyright mt-3 pt-3 pb-3 d-flex">
                        <p className="mb-0">Copyright 2024 © Bacola worpress theme. All rights reserved. Powered by vijeth kalavarkar</p>
                        <ul className="list list-inline ml-auto mb-0">
                            <li className="list-inline-item ">
                                <Link to="#"><FaInstagram /></Link>
                                <Link to="#"><RiFacebookCircleLine /></Link>
                                <Link to="#"><AiOutlineYoutube /></Link>
                            </li>
                        </ul>
                    </div>


                </div>
            </footer>



        </>
    )
}
export default Footer