import { Link } from "react-router-dom";

const Info=()=>{
    return(
        <>
        <section className="InfoSec">
            <div className="InfoDiv">
                <span>ALGO VISUALIZER</span>
                <h4>Gayathri K</h4>
                <h4>Charubala B</h4>
            </div>
            <div className="InfoDiv2">
            <span>CONTACTS</span>
                <h4>gayathri.k2022cse@sece.ac.in</h4>
                <h4>charubala.b2022cse@sece.ac.in</h4>
                <Link to={"/feedback"}><button className="ff">hello</button></Link>
            </div>
        </section>
        </>
    )
}
export default Info;