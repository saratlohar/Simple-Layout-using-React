import React from "react";
import './home.css';


function Home(){
    return(
        <div  className='main'>
            <div className="head">This Is Home Page</div>
            <div className="column">This Is a Single Column</div>
            <div className="middle">
                <div className="left">This is First Column</div>
                <div className="right">This is Second Column</div>
            </div>
            <div className="last">
                <div className="last1">This is FIRST Column</div>
                <div className="last1">This is SECOND Column</div>
                <div className="last1">This is THIRD Column</div>
                <div className="last1">This is FOURTH Column</div>
            </div>
        </div>
    )
}
export default Home;