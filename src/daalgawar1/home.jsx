import React from "react";
import "./home.css"
import Left from "./left.jsx";
import Right from "./right.jsx";
const Home = () =>{
    return(
        <div className="home">
            <div className="container">
                <div className="boxs">
                    <Left/>
                    <Right/>
                </div>
            </div>
        </div>
    )
};

export default Home;