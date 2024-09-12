import { MdClose } from "react-icons/md";
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import QuantityDrop from "../QuantityDrop/QuantityDrop";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import ProductZoom from "../ProductZoon/ProductZoom";
import { myContext } from "../../App";
import { useContext } from "react";


const ProductModel = (props) => {

    const context = useContext(myContext);


    return (
        <>
            <Dialog open={true} className='productModal' onClose={() => context.setisOpenProductModel(false)}>

                <Button className='close_' onClick={() => context.setisOpenProductModel(false)}><MdClose /></Button>
                <h4 className="mb-1 font-weight-bold">All Natural italian-Style chicken Meatballs</h4>

                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-4">
                        <span>Brands:</span>
                        <span className="ml-2"><b>Welch's</b></span>

                    </div>

                    <Rating name="read-only" value={3} size="small" precision={0.5} readOnly />

                </div>

                <hr />


                <div className="row mt-2 productDetailsModal">
                    <div className="col-md-5">

                        
                        <ProductZoom />
                        


                    </div>


                    <div className="col-md-7">
                        <div className="d-flex align-items-center mb-3">
                            <span className="oldPrice lg">$ 20.00</span>
                            <span className="netPrice text-danger ml-2 lg">$ 14.00</span>
                        </div>

                        <span className="badge bg-success">In Stock</span>

                        <p className="mt-3">interaction, develop longer wheel and rail life, improve rail vehicle performance, increase fuel savings, reduce noise and provide lasting protection.</p>

                        <div className="d-flex align-items-center">

                            <QuantityDrop />

                            <Button className="btn-blue btn-big btn-round ml-3">Add to Cart</Button>
                        </div>


                        <div className="d-flex align-items-center mt-5 actions">
                            <Button className="btn-round btn-sml" variant="outlined"><FaRegHeart />&nbsp;Add to Wishlist</Button>
                            <Button className="btn-round btn-sml ml-3" variant="outlined"><MdOutlineCompareArrows />&nbsp;Compare</Button>
                        </div>

                    </div>
                </div>

            </Dialog>
        </>
    )
}
export default ProductModel