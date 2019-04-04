import React from 'react';
import Logo from "../assets/images/Logo.png"
import {NavLink} from "react-router-dom";


export class Header extends React.Component {
    render(){
        return(
            <div className="header" id="header">
                <div class="container" id="header-upper">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                                <a href="#">
                                    <i class="glyphicon glyphicon-user"></i>
                                    <b>My Acount</b>
                                </a>
                        </li>
                        <li>
                                <a href="#">
                                    <i class="glyphicon glyphicon-shopping-cart"></i>
                                    <b>Cart</b>
                                </a>
                        </li>
                        <li>
                                <a href="#">
                                    <i class="glyphicon glyphicon-check"></i>
                                    <b>Checkout</b>
                                </a>
                        </li>
                        <li>
                                <a href="#" class="dropdown-toggle btn" data-toggle="dropdown" aria-expanded="false">
                                    <i class="glyphicon glyphicon-search" style={{color: "white"}}></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="">
                                        <input type="text" placeholder="Search" />
                                        </a>
                                    </li>
                                </ul>
                        </li>
                        
        
                    </ul>
        
                </div>
        
                <div class="container" id="header-bottom">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                    <img src={Logo} />
                            </li>
                            <li>
                                <a href="#">
                                    <i class="glyphicon glyphicon-phone" ></i>
                                    <b class="phone" style={{color: "white"}}>+123 4567 890</b>
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{textAlign: "center"}}> 
                                    <i class="glyphicon glyphicon-star"></i> <br />
                                    <b style={{color: "white"}}>WISHLIST</b> 
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{textAlign: "center"}}>
                                    <i class="glyphicon glyphicon-tag"></i> <br />
                                    <b style={{color: "white"}}>COMPARE</b> 
                                 </a>
                            </li>
                            <li>
                                <a href="#" style={{textAlign: "center"}}>
                                    <i class="glyphicon glyphicon-shopping-cart"></i> <br />
                                        <b style={{color: "white"}}>MY CART</b> 
                                </a>
                             </li>
                            
            
                        </ul>
            
                    </div>
                    <div class="container" id="nav">
                            <ul class="nav navbar-nav navbar-left" id="nav">
                                <li>
                                    <NavLink activeClassName="active" to="/">HOME</NavLink>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" to="/about">ABOUT</NavLink>
                                </li>
                                <li>
                                    <a href="#">reviews</a>
                                </li>
                                <li>
                                    <a href="#">locations</a>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" to="/contacts">CONTACTS</NavLink>
                                </li>         
        
                            </ul>
                    </div>
                </div>

                
        )
    }
}