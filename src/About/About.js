import React, { Component } from 'react';
import './About.css';

class About extends Component
{
  render()
  {
    return (
      <div className='about'>
          
          <h1> Oskar Jönsson </h1>

          <p> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque nec odio rutrum, bibendum orci vel, maximus arcu. 
          Ut efficitur lacinia nisi ut viverra. Suspendisse placerat ullamcorper hendrerit. 
          Duis tincidunt, ipsum nec suscipit dignissim, quam velit cursus tortor, non rhoncus sapien metus sit amet arcu. 
          Praesent tincidunt vestibulum nisl, in consequat urna condimentum suscipit. Vivamus tristique leo vel mi cursus cursus sed in erat. 
          Suspendisse sed sem in ipsum consequat condimentum. Proin at interdum mauris, ut ullamcorper libero. 
          Etiam ut nunc lorem. Suspendisse et ultrices nulla. Donec vel justo convallis, scelerisque risus ut, venenatis diam.
          Ut lacus justo, pharetra non sodales at, dapibus id ligula. Nam vitae lobortis leo. Ut id tortor pharetra, dapibus libero scelerisque, semper odio. 
          Ut iaculis facilisis turpis, in tincidunt mi auctor et. Vestibulum at justo non orci congue fermentum ultrices et tortor.
          </p>

          <h2> Links </h2>
          <ul>
            <li> <a href=""> Github   </a> </li>
            <li> <a href=""> LinkedIn </a> </li>
            <li> <a href=""> E-Mail     </a>  </li>
          </ul>
      </div>
    );
  }
}

export default About;
