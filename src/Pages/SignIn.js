import { useContext, useEffect } from "react"
import { myContext } from "../App"
import Logo from '../assets/images/mylogo.jpg'
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import SignInGoogle from '../assets/images/googleIcon.png'


const SignIn = () => {

    const context = useContext(myContext)

    useEffect(()=>{
        context.setisHeaderFooterShow(false)
    },[])

    return(
        <>
            <div className="section signinPage">

                <div className="shape-bottom">
                    <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8" style={{enableBackground: 'new 0 0 1921 819.8'}} ><path class="std0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path></svg>
                </div>

                <div className="container">
                    <div className="card box p-3 shadow border-0">
                        <div className="text-center">
                            <img src={Logo} alt=""/>
                        </div>

                        

                        <form className="mt-3">
                            <h2 className="mb-4">SignIn</h2>

                            <div className="form-group">
                                <TextField type="email" className="w-100" id="standard-basic" label="Email" variant="standard" required/>
                            </div>
                            
                            <div className="form-group">
                                <TextField type="password" className="w-100" id="standard-basic" label="password" variant="standard" required/>
                            </div>

                            <Link to="" className="border-effect txt">Forgot password</Link>

                            <div className="d-flex align-items-center mt-3 mb-3">
                                <div className="row w-100">
                                    <div className="col-md-6 w-100">
                                        <Button className="btn-blue col btn-lg btn-big">SignIn</Button>
                                    </div>
                                    <div className="col-md-6 w-100">
                                        <Link to="/"><Button className="col btn-lg btn-big ml-3" onClick={()=>context.setisHeaderFooterShow(true)} style={{ background: '#f6fafd'}}>Cancel</Button></Link>
                                    </div>
                                </div>
                                
                                
                            </div>

                            <p className="txt">Not Registered ? <Link to="/signup" className="border-effect">SignUp</Link></p>

                            <h6 className="mt-3 text-center">Or Continue with Social Account</h6>

                            


                            <Button className="loginwithGoogle mt-2"><img src={SignInGoogle} alt=""/>SignIn with Google</Button>

                            


                        </form>

                    </div>  
                </div>
            </div>
        </>
    )
}
export default SignIn