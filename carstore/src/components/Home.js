import React from 'react';

export class Home extends React.Component {
    render(){
        return(
            <div className="home">
                        <div class="container" id="banner">
                            <img src={require('../assets/images/banner.png')} />
                        </div>
                        <div class="container" id="section">
                <div class="row" id="section-upper">
                    <div class="col-sm-6" id="section-upper-l">
                        <a href="">
                            <div class="container" id="section-upper-left">
                                <h3>Headlights</h3>
                                <h5>Headlights Project, LED, Factory</h5>
                            </div>
                            <img src={require('../assets/images/headlights.png')} />
                        </a>   
                            </div>
            
                        <div class="col-sm-6" id="section-upper-r">
                            <a href="">
                            <div class="container" id="section-upper-right">
                            
                                <h3>Headlights</h3>
                                <h5>Headlights Project, LED, Factory</h5>
                            </div>
                            <img src={require('../assets/images/brakes.png')} />
                            </a> 
                        </div>
                    </div>
                    <div class="row" id="section-bottom">
                            <div class="row" id="section-bottom">
                                    <div class="col-sm-6" id="section-bottom-l">
                                    <a href="">
                                        <div class="container" id="section-bottom-left">
                                            <h3>Headlights</h3>
                                            <h5>Headlights Project, LED, Factory</h5>
                                        </div>
                                        <img src={require('../assets/images/Main 3.png')} />
                                    </a>    
                                    </div>
                                    <div class="col-sm-6" id="section-bottom-r">
                                    <a href="">  
                                        <div class="container" id="section-bottom-right">
                                            <h3>Headlights</h3>
                                            <h5>Headlights Project, LED, Factory</h5>
                                        </div>
                                        <img src={require('../assets/images/Main 4.png')} />
                                    </a>  
                                    </div>
                                </div>
                        
                    </div>
                </div>
                    <div class="container" id="products">
                        <h1>Featured Products</h1>

                        <div class="container">
                            <ul class="list-inline">
                                <li>
                                    <a href="#">
                                    <img src={require('../assets/images/product1.png')} />
                                    <h5>Headlights</h5>
                                    <h3>$300.00</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <img src={require('../assets/images/product2.png')}  />
                                    <h5>Headlights</h5>
                                    <h3>$300.00</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <img src={require('../assets/images/product3.png')}  />
                                    <h5>Headlights</h5>
                                    <h3>$300.00</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <img src={require('../assets/images/product4.png')}  />
                                    <h5>Headlights</h5>
                                    <h3>$300.00</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <img src={require('../assets/images/product5.png')}  />
                                    <h5>Headlights</h5>
                                    <h3>$300.00</h3>
                                    </a>
                            </li>

                            </ul>
                        </div>

                    </div>
                    <div class="container" id="offer">
                            <div class="container" id="offer-left">
                                <h1>25% OFF</h1>
                                <h3>On order over $999</h3>
                                <h5>This offer is valid on all our items</h5>
                                <button type="button" class="btn btn-danger" id="button">BUY NOW</button>
                            </div>

                            <div class="container" id="offer-right">
                                <h1>25% OFF</h1>
                                <h3>On order over $999</h3>
                                <h5>This offer is valid on all our items</h5>
                                <button type="button" class="btn btn-danger" id="button">BUY NOW</button>
                            </div>

                    </div>
            </div>
        )
    }
}