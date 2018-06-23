import React, { Component } from 'react';
import './Idemo.css';
class IDemo extends Component {
    render() {
        return (
            <div>
            <center>
                <div class="container">
                <center><h3 >Interview Dashboard</h3></center>
                <center>
        <ul class="nh">
            <li>iSlot</li>
            <li class="lil">Dashboard</li>
            <li class="lili"><a href="" class="glyphicon glyphicon-option-vertical"></a></li>
        </ul>
        </center>.
                <div class="main-container" id="main-con">
                    <div class="container1">
                    <h1 class="h1">Recent Events</h1>
                    <button id="b1" type="button" class="btn btn-default"><p id="name"><h4>Angular WalkIns</h4></p></button>
                    <button id="b2" type="button" class="btn btn-default"><p id="name1"><h4>Java Walkins</h4></p></button>
                    </div>
                    <div class="container2">
                    <h1 class="upc">Upcoming Events</h1>
                <button id="b3" type="button" class="btn btn-default"><p id="name1"><h4>.Net Walkins</h4></p></button>
                    
                    <button id="b4" type="button" class="btn btn-default"><p id="name"><h4>Informatica Walkins</h4></p></button>
                    </div>
                    <div class="container3">
                    <h2 class="pt glyphicon glyphicon-flash">Points so far..</h2>
                    <div>
                        <p class="cont"><h4>Total</h4></p>
                         <p class="cont1"><h4>This month..</h4></p> 
                    </div>
                    <input type="text" class="bx" readOnly />
                    <input type="text" class="bx1" readOnly />
                    </div>
                </div>
            </div>
            </center>
            </div>
        );
    }
}

export default IDemo;