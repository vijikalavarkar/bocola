import Logo from '../../assets/images/mylogo.jpg'
import { Link } from 'react-router-dom'
import CountryDropdown from '../CourntyDropdown/CountryDropdown';
import Searchbox from '../Searcgbox/Searchbox';
import Profcart from '../Profcart/Profcart';
import Navigation from '../Navigation/Navigation';
import { useContext } from 'react';
import { myContext } from '../../App';



const Header = () => {

    const context = useContext(myContext)

    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-bluish">
                    <div className="container">
                        <p className="mt-0 mb-0 text-center">Due to <b>COVID-19</b> epidemic, orders maybe processed with a slight delay</p>
                    </div>
                </div>


                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo'/></Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                {
                                    context.countryList.length!==0 && <CountryDropdown />
                                }
                                
                                <Searchbox />
                                <Profcart />
                            </div>

                        </div>
                    </div>
                </header>


                <Navigation />


            </div>
        </>
    )
}

export default Header