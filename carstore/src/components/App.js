import React from 'react';
import {Route} from "react-router-dom";

import { Header } from './Header';
import { Home } from './Home';
import { Footer } from './Footer';
import { Contacts } from './Contacts';
import { About } from './About';

// import { Footer } from './Footer';


export class App extends React.Component {
    render(){
        return(
            <div className="app">
                <Header />

                <Route exact path="/" component={Home} />
                {/* <Route exact path="/projects" component={Projects} />
                <Route exact path="/contacts" component={Contacts} /> */}
                <Route path="/contacts" component={Contacts} />
                <Route path="/about" component={About} />
                <Footer />
            </div>
        )
    }
}