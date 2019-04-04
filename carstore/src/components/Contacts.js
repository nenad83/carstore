import React from 'react';
import Map from "./Map";

export class Contacts extends React.Component {
    render(){
        return(
            <div className="contacts">
                <div class="container" id="contacts">
                        <h1>Contacts</h1>
                        <div class="row">
                                <div class="col-sm-5">
                                                <div class="form-group">
                                                
                                                    <label for="email" style={{color: "white"}}>Email:</label>
                                                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                                </div>
                                                <div class="form-group">
                                                    <label style={{color: "white"}}>Full Name:</label>
                                                    <input type="text" class="form-control"  placeholder="Full Name" />
                                                </div>
                                                <div class="form-group">
                                                    <textarea style={{width:"400px", height: "200px"}} placeholder="Enter Text Here"></textarea>
                                                </div>
                                                <button type="button" class="btn btn-danger">SEND</button>
                                                

                                </div>

                                <div class="col-sm-7">
                                        <ul class="list-unstyled">
                                                <li>
                                                    <i class="fa fa-font-awesome" style={{fontSize: "20px", color: "red"}}><span style={{color: "gray", paddingLeft:"7px"}}>123, Main Road, Your City, NY</span></i>
                                                </li>
                                                <li>
                                                    <i class="glyphicon glyphicon-phone" style={{fontSize: "20px", color: "red"}}><span style={{color: "gray", paddingLeft:"7px"}}>123 456 7890</span></i>
                                                </li>
                                                <li>
                                                    <i class="glyphicon glyphicon-dashboard" style={{fontSize: "20px", color: "red"}}><span style={{color: "gray", paddingLeft:"7px"}}>7 days a week</span></i>
                                                </li>
                                                <li>
                                                    <i class="glyphicon glyphicon-envelope" style={{fontSize: "20px", color: "red"}}><span style={{color: "gray", paddingLeft:"7px"}}>info@email.com</span></i>
                                                </li> 
                                                <br />
                                                
                                                <li>
                                                        <i class="fa fa-font-awesome" style={{fontSize: "20px", color: "red"}}><span style={{color: "gray", paddingLeft:"7px"}}>356, Main Road, Your City, NY</span></i>
                                                    </li>
                                                    <li>
                                                        <i class="glyphicon glyphicon-phone" style={{fontSize: "20px", color: "red"}}><span style={{color: "gray", paddingLeft:"7px"}}>345 678 7890</span></i>
                                                    </li>
                                                    <li>
                                                        <i class="glyphicon glyphicon-dashboard" style={{fontSize: "20px", color: "red"}}><span style={{color: "gray", paddingLeft:"7px"}}>7 days a week</span></i>
                                                    </li>
                                                    <li>
                                                        <i class="glyphicon glyphicon-envelope" style={{fontSize: "20px", color: "red"}}><span style={{color: "gray", paddingLeft:"7px"}}>info@email.com</span></i>
                                                    </li> 
                                            </ul>

                                </div>

                        </div>
                        {/* <div class="container" id="map">
                                <div class="mapouter"><div class="gmap_canvas"><iframe width="1200" height="1000" id="gmap_canvas" src="https://maps.google.com/maps?q=cassablanca%20skopje&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.crocothemes.net"></a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1000px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1000px;}</style></div>

                        </div> */}
                        <Map />
                    </div>
            </div>
        )
    }
}