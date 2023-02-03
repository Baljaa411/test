import React from "react";
import "./home.css"
import Button from "./button";
import img1 from "../assets/ee.jpg"

const Home = () =>{
    return(
        <div className="home">
        <Button variant="blue" text="hello" img={img1}/>
        
        </div>
    )
}

export default Home