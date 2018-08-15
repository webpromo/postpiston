
import React from 'react';


function Menu() {  
    return (

        <menu>
        <div className="logo"><a href="http://localhost:3000/$/"><img src={require("../images/power-of-twitter-for-business.png")} alt="Harness the power of Twitter for business!" height="100" /></a></div>
        <div><h1 className="off-white">Best Twitter Marketing Software</h1></div>
        <div className="nav-buttons">
            <div><a href="http://localhost:3000/#/" title="Harness the Power of Twitter for Business Marketing">Home</a></div>
            <div><a href="" title="The Best way to use Twitter for marketing and PR">About</a></div>
            <div><a href="" title="Best Twitter Marketing Software"  onClick={this.login}>Login</a></div>
            <div><a href="" title="">Contact</a></div>
        </div>
        </menu>
    )
}

export default {
    Menu
}