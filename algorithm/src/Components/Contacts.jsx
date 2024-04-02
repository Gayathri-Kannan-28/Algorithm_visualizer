import React from 'react';
import { useEffect } from 'react';

function Contacts() {

    useEffect(() => {
        getFeedDetails(); // Trigger feed details fetching when component mounts
    }, []);

    async function addNewEntry(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const collegeInput = document.getElementById('college');
        const viewInput = document.getElementById('view');

        const name = nameInput.value;
        const email = emailInput.value;
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
                    email,
                    college,
                    view
                })
            });
            const data = await response.json();
            console.log(data);

            // Provide feedback to the user (e.g., display success message)
            //document.getElementById('msg').textContent = 'Feedback sent successfully!';
        } catch (error) {
            console.error('Error adding entry:', error);
            // Provide feedback to the user (e.g., display error message)
            //document.getElementById('msg').textContent = 'Error submitting feedback. Please try again later.';
        }
    }

    async function getFeedDetails() {
        try {
            const response = await fetch('https://loginapi-c4sh.onrender.com/get-feed');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching feed details:', error);
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
                            <input type="email" name="EMAIL" placeholder="Email" id="email" required/>
                            <input type="text" name="College" placeholder="College" id="college"/>
                            <input name="MESSAGE" placeholder="How it's useful" id="view"></input>
                            <button onClick={addNewEntry} className="submit">Send Feedback</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contacts;