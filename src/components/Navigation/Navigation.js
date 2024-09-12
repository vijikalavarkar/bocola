import { Button } from '@mui/material';
import { FiMenu } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {

    const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false)

    const isOpenSidebarNav = () => {
        setisOpenSidebarVal(!isOpenSidebarVal)
    }
    

    return (
        <>
            <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3 navPart1'>
                            <div className='catWrapper'>
                                <Button className='allCatTab align-items-center' onClick={isOpenSidebarNav}>
                                    <span className='icon1 mr-2'><FiMenu /></span>
                                    <span className='text'>ALL CATEGORIES</span>
                                    <span className='icon2 ml-2'><FaAngleDown /></span>
                                </Button>


                                <div className={`sidebarNav ${isOpenSidebarVal===true ? 'open' : ''}`}>
                                    <ul>
                                        <li><Link to="/"><Button>Man <FaAngleRight  className='ml-auto'/></Button></Link>
                                            <div className='submenu'>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Footware</Button></Link>
                                                <Link to="/"><Button>watches</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link to="/"><Button>Women <FaAngleRight  className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>watchwes</Button></Link>
                                                <Link to="/"><Button>Footware</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link to="/"><Button>Beauty</Button></Link></li>
                                        <li><Link to="/"><Button>Watches</Button></Link></li>
                                        <li><Link to="/"><Button>Kids</Button></Link></li>
                                        <li><Link to="/"><Button>Gift</Button></Link></li>
                                        <li><Link to="/"><Button>Man</Button></Link></li>
                                        
                                    </ul>
                                </div>


                            </div>
                        </div>

                        <div className='col-sm-9 navPart2 d-flex align-items-center'>
                            <ul className='list list-inline ml-auto'>

                                <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                    </div>
                                </li>

                                <li className='list-inline-item'><Link to="/"><Button>Man</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                    </div>
                                </li>

                                <li className='list-inline-item'><Link to="/"><Button>Women</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                    </div>
                                </li>

                                <li className='list-inline-item'><Link to="/"><Button>Beuty</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                    </div>
                                </li>

                                <li className='list-inline-item'><Link to="/"><Button>Watches</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                    </div>
                                </li>

                                <li className='list-inline-item'><Link to="/"><Button>Kids</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                    </div>
                                </li>

                                <li className='list-inline-item'><Link to="/"><Button>Contact</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                    </div>
                                </li>




                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navigation