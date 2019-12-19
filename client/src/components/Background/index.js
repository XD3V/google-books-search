import React from "react";
import "./style.css"
// This Jumbotron component allows us to use a bootstrap Jumbotron without worrying about class names
function BackgroundImg(props) {
    return (
        <div>
            <div className="background">
                {props.children}
            </div>
        </div>
    );
}

export default BackgroundImg;
