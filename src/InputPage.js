import React from 'react';
import './style.css';


const InputPage =() => {

return(

    <>
     <div className="email-form"  style={{marginLeft:"200px", marginRight:"200px"}}>
          <p  style={{alignItems:"center"}}>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="get-started">
            <input type="text" placeholder="Email address" />
            <a href="/" className="btn-lg" >Get started <i className="fas fa-chevron-right"></i></a>
          </div>
        </div>
    </>
)
}

export default InputPage;