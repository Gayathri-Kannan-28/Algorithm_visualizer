import React from 'react';


function Contacts() {
  return (
     <>
     <section className="contact-content" id="contact">
    <div className="container">
        <div className="contact-title">
            <h4>Let's Connect</h4>
        </div>
        <div className="contact">
            <form name="submitToGoogleSheet">
                <input type="text" name="NAME" placeholder="Name" id="name" required/>
                <input type="email" name="EMAIL" placeholder="Email" required/>
                
                <input type="text" name="College" placeholder="College" id="college"/>
                <textarea name="MESSAGE" placeholder="how its useful" id="view"></textarea>
                <input type="submit" value="Send Feedback" className="submit"/>
                
            </form>
           
            <span id="msg"></span>
        </div>
    </div>
    
</section>
</>
  );
}

export default Contacts;