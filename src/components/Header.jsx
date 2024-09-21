import React from "react";
import style from "../style/style.css"
import userlogin from "./login";
function Header(){
    return(
        <header className="header">
            <h1>Keeper</h1>
            
            <div>
            <form>
            <div>Username</div>
            <input type="text"></input>
            <div>Password</div>
            <input type="password"></input>
            </form>
            </div>

        </header>
    );
}


export default  Header;