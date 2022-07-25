import React from "react";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Footer from "../components/Footer";
import './Player.css'



const Player = ({ spotify }) => {
    return(
    <div className="player">    
        <div className="player__body">
            {/* Sidebar */}
            <Sidebar />        
            {/* Body */}
            <Body spotify={spotify} />
        </div>    
        {/* Footer */}
        <Footer spotify={spotify} />
    </div>
    )
}

export default Player;