import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home(props){
    return(
        <div className="container">
            <div className="links">
                <h1 className="h">
                    <Link to="/login" className="link">Login</Link>
                </h1>
                <h1 className="h">
                    <Link to="/signup" className="link">SignUp</Link>
                </h1>
            </div>
            <div className="style">
            <h2>{props.name ? `Welcome back, ${props.name}` : "Login please"}</h2>

            </div>
            
           
        </div>
    )
}

export default Home;
