import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import hamza from '../assets/hamza.jpg';
import { List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
 
    render(){

    return(

     <div className="contact-body">
     <Grid className="contact-grid">
     <Cell coll={6}>
         <h2>Hamza Rouissi</h2>
         <img src={hamza}
          alt="yassine"
          style={{height: '250px'}} />
          <p style={{width: '75%', margin: 'auto', paddingTop:'1em'}}>
Tunisian Web Developer in love with MERN Stack, Symfony, Bootstrap, Html5, Css3
I'm flexible with my working hours and always feel happy to collaborate with any freelancers you work with.
Always looking for new challenges.  
Thanks for looking at my profile.
See you again with your project discussion :)   
          </p>
         </Cell>    
     <Cell coll={6}>
         
         
         <h2>Contact Me </h2>
         <hr/> 

   <div className="contact-list">
       
   <List>
  <ListItem>
    <ListItemContent style={{fontSize:'30px' ,fontFamily:'Anton'}}>
       <i className=" fa fa-phone-square" aria-hidden="true" />
       (216) 24879424 
       </ListItemContent>

  </ListItem>


</List>
       
       
       
       </div>       



   

         </Cell> 

     </Grid>
     </div>


        )
    }


}

export default Contact;