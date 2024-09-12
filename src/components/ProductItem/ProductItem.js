import { AiOutlineFullscreen } from "react-icons/ai";
import iphone from '../../assets/images/iphone.jpg'
import { Button, Rating } from "@mui/material"
import { FaRegHeart } from "react-icons/fa6";
import { useContext } from "react";
import { myContext } from "../../App";


const ProductItem = (props) => {

    const context = useContext(myContext);

    const viewProductDetails = (id) => {
        context.setisOpenProductModel(true)
    }

    return (
        <>
            <div className={`productItem ${props.itemView}`}>

                <div className="imgWrapper">
                    <img src={iphone} alt="" className="w-100" />

                    <span className="badge badge-primary">28%</span>

                    <div className="actions">
                        <Button onClick={viewProductDetails}><AiOutlineFullscreen /></Button>
                        <Button><FaRegHeart /></Button>
                    </div>

                </div>

                <div className="info">
                    <h4>Apple iPhone 15 Pro Max (256 GB) - Black Titanium</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />

                    <div className="d-flex">
                        <span className="oldPrice">$ 20.00</span>
                        <span className="netPrice text-danger ml-2">$ 14.00</span>
                    </div>

                </div>

            </div>



            

            {/* <ProductModel /> */}

        </>
    )
}
export default ProductItem