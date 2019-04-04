import React from 'react';
import {Route} from "react-router-dom";
import { generateKeyPair } from 'crypto';

const iconStyle = {
    backgroundColor: "#000000"
};

const fontSize = {
    fontSize: "20px",
    color: "white"
}

export class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
                <div class="container" id="footer">
                        <div class="row" id="footer-upper">
                            <div class="col-sm-3">
                                <h1>Quick Links</h1>
                                <ul class="list-unstyled">
                                    <li>
                                    <a href="#">About Us</a>
                                    </li>
                                    <li>
                                    <a href="#">Customer Service</a>
                                    </li>
                                    <li>
                                    <a href="#">Privacy Plicy</a>
                                    </li>
                                    <li>
                                    <a href="#">Site Map</a>
                                    </li>
                                    <li>
                                    <a href="#">Search Terms</a>
                                    </li>
                                    <li>
                                    <a href="#">Advanced Search</a>
                                    </li>
                                    <li>
                                    <a href="#">Order and Returns</a>
                                    </li>
                                    <li>
                                    <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-sm-3">
                                    <h1>Quick Links</h1>
                                    <ul class="list-unstyled">
                                        <li>
                                        <a href="#">About Us</a>
                                        </li>
                                        <li>
                                        <a href="#">Customer Service</a>
                                        </li>
                                        <li>
                                        <a href="#">Privacy Plicy</a>
                                        </li>
                                        <li>
                                        <a href="#">Site Map</a>
                                        </li>
                                        <li>
                                        <a href="#">Search Terms</a>
                                        </li>
                                        <li>
                                        <a href="#">Advanced Search</a>
                                        </li>
                                        <li>
                                        <a href="#">Order and Returns</a>
                                        </li>
                                        <li>
                                        <a href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-sm-3">
                                        <h1>Quick Links</h1>
                                        <ul class="list-unstyled">
                                            <li>
                                            <a href="#">About Us</a>
                                            </li>
                                            <li>
                                            <a href="#">Customer Service</a>
                                            </li>
                                            <li>
                                            <a href="#">Privacy Plicy</a>
                                            </li>
                                            <li>
                                            <a href="#">Site Map</a>
                                            </li>
                                            <li>
                                            <a href="#">Search Terms</a>
                                            </li>
                                            <li>
                                            <a href="#">Advanced Search</a>
                                            </li>
                                            <li>
                                            <a href="#">Order and Returns</a>
                                            </li>
                                            <li>
                                            <a href="#">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>

                    <div class="col-sm-3">
                            <h1>Newsletter</h1>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat consectetur massa sed faucibus. 
                                Integer ante est</h5>
                            <input type="text" placeholder="" /> <br />
                            <br/>
                            <button type="button" class="btn btn-danger" id="button">SUBMIT</button> 
                            <div class="container" id="social">
                                <ul class="nav navbar-nav">
                                    <li>
                                        <a href="https://www.facebook.com" style={iconStyle} target="_blank"><i class="fa fa-facebook-official" style={fontSize}></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com" style={iconStyle} target="_blank"><i class="fa fa-twitter-square" style={fontSize}></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com" style={iconStyle} target="_blank"><i class="fa fa-google-plus-square" style={fontSize}></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com" style={iconStyle} target="_blank"><i class="fa fa-instagram" style={fontSize}></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com" style={iconStyle} target="_blank"><i class="fa fa-pinterest-square" style={fontSize}></i></a>
                                    </li>


                                </ul>

                          </div>  

                            </div>
                        </div>
                    </div>
                            <div class="container" id="footer-middle">
                                <div class="row" id="footer-middle-cont">
                                    <div class="col-sm-4">
                                        <h1>Information</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat consectetur massa sed faucibus.
                                            Integer ante est, rutrum at eleifend quis, laoreet id nibh. Vestibulum condimentum pharetra justo, interdum pretium leo rutrum ut.
                                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                    </div>

                                    <div class="col-sm-4">
                                            <h1>Information</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat consectetur massa sed faucibus.
                                                Integer ante est, rutrum at eleifend quis, laoreet id nibh. Vestibulum condimentum pharetra justo, interdum pretium leo rutrum ut.
                                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                        </div>
                                    
                                    <div class="col-sm-4">
                                        <h1>Contact</h1>
                                        <ul class="list-unstyled">
                                            <li>
                                                <i class="fa fa-font-awesome" style={{fontSize: "15px", color: "red"}}><span style={{color: "gray",  paddingLeft:" 7px"}}>123, Main Road, Your City, NY</span></i>
                                            </li>
                                            <li>
                                                <i class="glyphicon glyphicon-phone" style={{fontSize: "15px", color: "red"}}><span style={{color: "gray",  paddingLeft:" 7px"}}>123 456 7890</span></i>
                                            </li>
                                            <li>
                                                <i class="glyphicon glyphicon-dashboard" style={{fontSize: "15px", color: "red"}}><span style={{color: "gray",  paddingLeft:" 7px"}}>7 days a week</span></i>
                                            </li>
                                            <li>
                                                <i class="glyphicon glyphicon-envelope" style={{fontSize: "15px", color: "red"}}><span style={{color: "gray",  paddingLeft:" 7px"}}>info@email.com</span></i>
                                            </li>    
                                        </ul>
                                    </div>    

                                </div>

                            </div>

                            <div class="container" id="footer-lower">
                                <div class="row" id="footer-lower-cont">
                                        <div class="col-sm-2">
                                                
                                            </div>
                                        <div class="col-sm-5">
                                            <span>CarStore © 2017 . All Rights Reserved. </span>
                                        </div>

                                        <div class="col-sm-5">
                                            <ul class="list-inline">
                                                <li>
                                                    <a>
                                                            <i class="fa fa-cc-visa" style={{fontSize: "15px", color: "white"}}></i> 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                            <i class="fa fa-cc-mastercard" style={{fontSize: "15px", color: "white"}}></i> 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                            <i class="fa fa-cc-paypal" style={{fontSize: "15px", color: "white"}}></i> 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                            <i class="fa fa-cc-amex" style={{fontSize: "15px", color: "white"}}></i> 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                            <i class="fa fa-cc-diners-club" style={{fontSize: "15px", color: "white"}}></i> 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                            <i class="fa fa-cc-visa" style={{fontSize: "15px", color: "white"}}></i> 
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                        <div class="col-sm-2">
                                                
                                        </div>

                                </div>

                            </div>
            </div>
        )
    }
}