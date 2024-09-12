import ProductZoom from "../components/ProductZoon/ProductZoom"
import Rating from '@mui/material/Rating';
import QuantityDrop from "../components/QuantityDrop/QuantityDrop";
import { Button } from "@mui/material";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import TabContent from "../components/TabContent/TabContent";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {

    const [ activeSize, setActiveSize ] = useState(null);
    

    const isActive = (index) => {
        setActiveSize(index);
    }

    return (
        <>
            <section className="productDetails section">
                <div className="container">

                    {/* Products Start */}
                    <div className="row">
                        <div className="col-md-4 pl-5">
                            <ProductZoom />
                        </div>
                        <div className="col-md-7 pl-5 pr-5">
                            <h2 className="hd text-capitalize">All Natural Italian style meat balls</h2>

                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="mr-2">Brands :</span>
                                        <span><b>Welch's</b></span>
                                    </div>
                                </li>

                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
                                        <span className="text-light cursor ml-2">1 Review</span>
                                    </div>
                                </li>
                                
                            </ul>


                            <div className="d-flex info mb-3">
                                <span className="oldPrice">$ 20.00</span>
                                <span className="netPrice text-danger ml-2">$ 14.00</span>
                            </div>

                            <span className="badge badge-success">In Stock</span>

                            <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>


                            <div className="productSize d-flex align-items-center">
                                <span>Size / Weight :</span>
                                <ul className="list list-inline mb-4 pl-4">
                                    <li className="list-inline-item"><Link to={""} className={`tag ${activeSize === 0 ? 'active' : ""}`} onClick={()=>isActive(0)}>50g</Link></li>
                                    <li className="list-inline-item"><Link to={""} className={`tag ${activeSize === 1 ? 'active' : ""}`} onClick={()=>isActive(1)}>60g</Link></li>
                                    <li className="list-inline-item"><Link to={""} className={`tag ${activeSize === 2 ? 'active' : ""}`} onClick={()=>isActive(2)}>70g</Link></li>
                                    <li className="list-inline-item"><Link to={""} className={`tag ${activeSize === 3 ? 'active' : ""}`} onClick={()=>isActive(3)}>80g</Link></li>
                                    <li className="list-inline-item"><Link to={""} className={`tag ${activeSize === 4 ? 'active' : ""}`} onClick={()=>isActive(4)}>80g</Link></li>
                                </ul>
                            </div>


                            <div className="d-flex align-items-center mt-3">
                                <QuantityDrop />
                                <Button className="btn-blue btn-lg btn-big btn-round"><FaCartPlus />&nbsp;&nbsp;&nbsp;Add to Cart</Button>
                                
                                <Tooltip title="Add to Wishlist" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-4"><FaRegHeart /></Button>
                                </Tooltip>

                                <Tooltip title="Compare" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-4"><MdOutlineCompareArrows /></Button>
                                </Tooltip>
                            </div> 

                            
                        

                        </div>
                    </div>
                    {/* Products Start */}

                    

                    {/* Tabs Start */}
                    <TabContent />
                    {/* Tabs ends */}


                    {/* related products start */}
                    <RelatedProducts title="RELATED PRODUCTS"/>
                    <RelatedProducts title="RECENTLY VIEWED PRODUCT"/>
                    {/* related products end */}


                </div>
            </section>
        </>
    )
}
export default ProductDetails