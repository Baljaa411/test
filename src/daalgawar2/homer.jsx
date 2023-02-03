import React from "react";
import "./homer.css"
import Top from "./top.jsx";
import Bottom from "./bottom.jsx";

const Homer = () =>{
    return(
        <div className="homer">
            <div className="home">
                <div className="top">
                    <Top/>
                </div>
                <div className="bottom">
                    <Bottom/>
                </div>
            </div>

        </div>
    )
}

export default Homer