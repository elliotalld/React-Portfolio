import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Hamza from '../assets/Hamza.png';

class LandingPage extends Component {
 
    render(){

    return(

     <div style={{ width:'100%' , margin:'auto'}}>

      <Grid className="landing-grid">
      <Cell col={12}></Cell>  
    
      <img 
      
      src={Hamza}
      alt="avatar"
      className="avatar-img"
      />    
      
     <div className="banner-text">
         <h1>Full Stack Web Developer</h1> 
         
    <hr />
    <p>HTML/CSS | Bootstrap | JavaScript | ReactJS | NodeJS | MonogoDB | PHP Symfony </p>
     
     
     
     
    <div className="social-links">

<a href="https://github.com/elliotalld/" rel="noopener noreferrer" target="_blank">
<i className="fa fa-github-square" aria-hidden="true"/>

</a>


<a href="https://www.facebook.com/nginx.postgres" rel="noopener noreferrer" target="_blank">
<i className="fa fa-facebook-square" aria-hidden="true"/>

</a>

<a href="https://www.linkedin.com/in/hamza-rouissi-989574173/" rel="noopener noreferrer" target="_blank">
<i className="fa fa-linkedin-square" aria-hidden="true"/>

</a> 
</div>
     
     
     </div>
  
     
          
    </Grid>    

        
     </div>


        )
    }


}

export default LandingPage;