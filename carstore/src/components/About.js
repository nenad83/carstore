import React from 'react';

export class About extends React.Component {
    render(){
        return(
            <div className="about">
                <div class="container" id="about-img">
                    <img src={require('../assets/images/company.png')} />
                </div>
                <div class="container" id="about">
                <h1>About</h1>
                    <h2>Morbi purus lectus, tincidunt ut accumsan vel, fermentum vitae tortor. Curabitur molestie ultrices leo vel pulvinar. 
                    Curabitur nunc mauris, vulputate ac odio nec, cursus pulvinar nisl. Quisque ex ante, tempus id ornare vel, tristique ut dui. 
                    Vivamus volutpat accumsan lorem, nec accumsan felis consectetur in. Curabitur nec erat molestie, dapibus quam et, varius mauris. 
                    Maecenas vitae metus mi. Vestibulum nec lorem eget ex congue fermentum. 
                    Cras nibh lectus, imperdiet at suscipit sit amet, sollicitudin in libero. Nullam tristique augue at dignissim accumsan.
                    <br />
                    Nullam blandit, dui vitae feugiat feugiat, lectus mi commodo erat, nec accumsan sem odio id purus. Donec laoreet,
                         metus nec scelerisque bibendum, tellus sem bibendum neque, congue tincidunt diam arcu a risus. Mauris in varius ex, vel sagittis tellus. 
                         Curabitur non erat purus. Sed ultrices turpis ultricies dolor ultricies eleifend. 
                        Donec porttitor eros dolor, eu rutrum nulla auctor sed. Etiam vestibulum velit ullamcorper viverra ornare. Fusce pharetra molestie pharetra.
                        Curabitur nec erat molestie, dapibus quam et, varius mauris. 
                        Maecenas vitae metus mi. Vestibulum nec lorem eget ex congue fermentum. 
                    </h2>    
                    
                    <div class="row" id="about-lower">
                             <div class="col-sm-4">
                                 <img src={require('../assets/images/person.png')} />
                                 <h3>John Doe</h3>
                                 <h4>FOUNDER</h4>
                                 <h5>Vivamus volutpat accumsan lorem, nec accumsan felis consectetur in. Curabitur nec erat molestie, dapibus quam et, varius mauris. 
                                    Maecenas vitae metus mi. Vestibulum nec lorem eget ex congue fermentum. 
                                    Cras nibh lectus, imperdiet at suscipit sit amet, sollicitudin in libero. Nullam tristique augue at dignissim accumsan.
                                    Curabitur nec erat molestie, dapibus quam et, varius mauris. 
                                    Maecenas vitae metus mi. Vestibulum nec lorem eget ex congue fermentum. </h5>
                
                            </div>
                            <div class="col-sm-4">
                                <img src={require('../assets/images/person.png')} />
                                <h3>John Doe</h3>
                                <h4>CO FOUNDER</h4>
                                <h5>Vivamus volutpat accumsan lorem, nec accumsan felis consectetur in. Curabitur nec erat molestie, dapibus quam et, varius mauris. 
                                       Maecenas vitae metus mi. Vestibulum nec lorem eget ex congue fermentum. 
                                       Cras nibh lectus, imperdiet at suscipit sit amet, sollicitudin in libero. Nullam tristique augue at dignissim accumsan.
                                       Curabitur nec erat molestie, dapibus quam et, varius mauris. 
                                       Maecenas vitae metus mi. Vestibulum nec lorem eget ex congue fermentum. </h5>
                
                            </div>
                            <div class="col-sm-4">
                                <img src={require('../assets/images/person.png')} />
                                <h3>John Doe</h3>
                                <h4>CO FOUNDER</h4>
                                <h5>Vivamus volutpat accumsan lorem, nec accumsan felis consectetur in. Curabitur nec erat molestie, dapibus quam et, varius mauris. 
                                       Maecenas vitae metus mi. Vestibulum nec lorem eget ex congue fermentum. 
                                       Cras nibh lectus, imperdiet at suscipit sit amet, sollicitudin in libero. Nullam tristique augue at dignissim accumsan.
                                       Curabitur nec erat molestie, dapibus quam et, varius mauris. 
                                       Maecenas vitae metus mi. Vestibulum nec lorem eget ex congue fermentum. </h5>
                
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}