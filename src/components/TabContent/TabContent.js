import { Button } from "@mui/material"
import { useState } from "react";
import Rating from '@mui/material/Rating';

const TabContent = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="card mt-5 p-5 detailsPageTabs">
                <div className="customTabs">
                    <ul className="list list-inline">
                        <li className="list-inline-item">
                            <Button className={`${activeTab === 0 && 'active'}`} onClick={() => { setActiveTab(0) }}>Description</Button>
                        </li>
                        <li className="list-inline-item">
                            <Button className={`${activeTab === 1 && 'active'}`} onClick={() => { setActiveTab(1) }}>Additional Info</Button>
                        </li>
                        <li className="list-inline-item">
                            <Button className={`${activeTab === 2 && 'active'}`} onClick={() => { setActiveTab(2) }}>Reviews</Button>
                        </li>

                    </ul>



                    {
                        activeTab === 0 &&
                        <div className="tabContent">
                            <p>Description</p>
                        </div>
                    }



                    {
                        activeTab === 1 &&
                        <div className="tabContent">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr className="stand-up">
                                            <th>Stand Up</th>
                                            <td>
                                                <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                                            </td>
                                        </tr>
                                        <tr className="folded-wo-wheels">
                                            <th>Folded (w/o wheels)</th>
                                            <td>
                                                <p>35.5"L x 18.5"W x 16.5"H(front to back wheel)</p>
                                            </td>
                                        </tr>
                                        <tr className="folded-w-wheels">
                                            <th>Folded (w/ wheels)</th>
                                            <td>
                                                <p>32.5"L x 24"W x 18.5"H(front to back wheel)</p>
                                            </td>
                                        </tr>
                                        <tr className="door-pass-through">
                                            <th>Door pass through</th>
                                            <td>
                                                <p>24</p>
                                            </td>
                                        </tr>
                                        <tr className="frame">
                                            <th>Frame</th>
                                            <td>
                                                <p>Aluminium</p>
                                            </td>
                                        </tr>
                                        <tr className="weight-wo-wheels">
                                            <th>Weight (w/o wheels)</th>
                                            <td>
                                                <p>20 LBS</p>
                                            </td>
                                        </tr>
                                        <tr className="weight-capacity">
                                            <th>Weight Capacity</th>
                                            <td>
                                                <p>60 LBS</p>
                                            </td>
                                        </tr>
                                        <tr className="width">
                                            <th>Width</th>
                                            <td>
                                                <p>24 </p>
                                            </td>
                                        </tr>
                                        <tr className="handle-height-ground-to-handle">
                                            <th>Handle height (ground to handle)</th>
                                            <td>
                                                <p>37-45"</p>
                                            </td>
                                        </tr>
                                        <tr className="wheels">
                                            <th>Wheels</th>
                                            <td>
                                                <p>12" air / wide track slick thead</p>
                                            </td>
                                        </tr>
                                        <tr className="seat-back-height">
                                            <th>Seat back Height</th>
                                            <td>
                                                <p>21.5"</p>
                                            </td>
                                        </tr>
                                        <tr className="head-room-inside-canopy">
                                            <th>Head room (inside canopy)</th>
                                            <td>
                                                <p>25"</p>
                                            </td>
                                        </tr>
                                        <tr className="pa_color">
                                            <th>Color</th>
                                            <td>
                                                <p>Black, Blue, Red, Green</p>
                                            </td>
                                        </tr>
                                        <tr className="pa_size">
                                            <th>Size</th>
                                            <td>
                                                <p>M, S</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }



                    {
                        activeTab === 2 &&
                        <div className="tabContent">
                            <div className="row">
                                <div className="col-md-8">
                                    <h3>Customer Questions and answers</h3>
                                    <br />

                                    <div className="card p-4 reviewsCard flex-row">
                                        <div className="image">
                                            <div className="rounded-circle">
                                                <img src="https://imgs.search.brave.com/m3WKoxG6aEmj08ob59ovpZbYc-CPXqeWdt0QcITSV2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JiaXRtZWRpYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDYvQW5keS1Q/cm9maWxlLTYwMC5w/bmc" alt="" />
                                            </div>
                                            <span className="text-g d-block text-center font-weight-bold">Vijeth Kalavarkar</span>
                                        </div>

                                        <div className="info pl-5">
                                            <div className="d-flex align-items-center w-100">
                                                <h5>11/10/1997</h5>
                                                <div className="ml-auto">
                                                    <Rating name="read-only" className="half-rating-read" value={4.5} precision={0.5} readOnly size="small" />
                                                </div>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                        </div>

                                    </div>

                                    <form className="reviewForm">
                                        <h4>Add a Review</h4>
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Write a Review" name="review"></textarea>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control"  type="text" placeholder="name" name="username" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <Rating name="rating" value={4.5} precision={0.5} readOnly size="small" />
                                                </div>
                                            </div>
                                        </div>

                                        <br />

                                        <div className="form-group">
                                            <Button type="submit" className="btn-blue btn-lg btn-big btn-round">Submit Review</Button>
                                        </div>

                                    </form>

                                </div>





                            </div>
                        </div>
                    }


                </div>
            </div>
        </>
    )
}
export default TabContent