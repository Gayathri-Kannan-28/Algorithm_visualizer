import React from 'react';
import { useEffect } from 'react';


function Contacts() {


    useEffect(() => {
        getFeedDetails(); // Trigger expense details fetching when component mounts
    }, []);

    async function addnewEntry() {
        const nameInput = document.getElementById('name');
        const collegeInput = document.getElementById('college');
        const viewInput = document.getElementById('view');

        const name = nameInput.value;
        const college = collegeInput.value;
        const view = viewInput.value;

        try {
            const response = await fetch('https://loginapi-c4sh.onrender.com/add-feed', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    college,
                    view
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error adding entry:', error);
        }
    }

    async function getFeedDetails() {
        try {
            const response = await fetch('https://loginapi-c4sh.onrender.com/get-feed');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching expense details:', error);
        }
    }


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
                <input name="MESSAGE" placeholder="how its useful" id="view"></input>
        
                <button  onClick={addnewEntry} value="Send Feedback" className="submit">Send Feedback</button>
                
            </form>
           
            <span id="msg"></span>
        </div>
    </div>
    
</section>
</>
  );
}

export default Contacts;