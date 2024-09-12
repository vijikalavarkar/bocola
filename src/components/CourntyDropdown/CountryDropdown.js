import Button from '@mui/material/Button'; 
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../../App';

const CountryDropdown = () => {

    


    const [isOpenModal, setisOpenModal] = useState(false)
    const [selectedTab, setSelectedTab] = useState(null)
    const [countryList, setCountryList] = useState([])




    const context = useContext(myContext)

    const selectCountry = (index, name) => {
        setSelectedTab(index)
        setisOpenModal(false)
        context.setSelectedCountry(name)
    }

    useEffect(()=>{
        setCountryList(context.countryList);
    },[])

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();

        if(keyword!==""){
            const list = countryList.filter((item)=>{
                return item.name.toLowerCase().includes(keyword);
            });
            setCountryList(list);
        }else{
            setCountryList(context.countryList);
        }

        

    }

    return(
        <>
            <Button className="countryDrop" onClick={()=>setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>{context.selectedCountry!== "" ? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10) + '...' : context.selectedCountry : "Select Location"}</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>


            <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className='locationModal'>
                <h4 className='mb-0'>Choose your delevery location</h4>
                <p>Enter the address and we will specify the offer for your area</p>
                <Button className='close_' onClick={()=>setisOpenModal(false)}><MdClose /></Button>

                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search your area" onChange={filterList}/>
                    <Button><FiSearch /></Button>
                </div>

                <ul className='countryList mt-3'>
                    {
                        countryList?.length !==0 && countryList?.map((item,index)=>{
                            return(
                                <li key={index}><Button onClick={()=>selectCountry(index,item.name)} className={`${selectedTab===index ? 'active' : ''}`}>{item.name}</Button></li>
                            )
                        })
                    }
                    
                    
                </ul>

            </Dialog>


        </>
    )
}
export default CountryDropdown