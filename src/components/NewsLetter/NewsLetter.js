import { Button } from '@mui/material'
import NewsLetterImage from '../../assets/images/coupon.png'
import { IoMailOutline } from "react-icons/io5";

const NewsLetter = () => {
    return(
        <>
            <section className="newsletterSec mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">$20 discount for your first order</p>
                            <h3 className="text-white">Join our newsletter and get ...</h3>
                            <p className="text-light">Join our email subscription now to get updates on <br/>promtions and coupons.</p>

                            <form>
                                <IoMailOutline />
                                <input type='text'placeholder='Your email address'/>
                                <Button>Subscribe</Button>
                            </form>

                        </div>
                        <div className="col-md-6">
                            <img src={NewsLetterImage} alt=''/>
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}
export default NewsLetter