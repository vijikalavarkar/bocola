import { Button } from "@mui/material"
import { useContext } from "react";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { myContext } from "../../App";
import { Link } from "react-router-dom";

const Profcart = () => {

    const context = useContext(myContext)

    return(
        <>
            <div className="part3 d-flex align-items-center ml-auto">
                {
                    context.isLogin !== true ? <Link to="/signin"><Button className="btn-blue btn-lg btn-round mr-3">SignIn</Button></Link> : <Button className="circle mr-3"><FiUser /></Button>
                }

                
                <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$3.89</span>
                    <div className="position-relative ml-2">
                        <Button className="circle"><IoBagOutline /></Button>
                        <span className="count d-flex align-items-center justify-content-center">1</span>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Profcart