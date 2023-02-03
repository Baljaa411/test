import React from "react";
import "./movielist.css"

const Movielist = (props) =>{
    return(
        <div className="movie">
            <div className="moviecontainer">
                <div className="movie-card-container">
                    <div className="movie-card1">
                        <div className="movie-card-img">
                            <img src={props.img} alt="images"/>
                        </div>
                        <div className="movie-card-text">
                                <h2>{props.title}</h2>
                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movielist;