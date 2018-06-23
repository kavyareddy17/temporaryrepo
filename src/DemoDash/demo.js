import React, { Component } from 'react';
import './demo.css';
class Demo extends Component {
    render() {
        return (
            <div>
            <center>
                <div class="container">
                <center><h3 >Admin Dashboard</h3></center>
                <center>
        <ul>
            <li>iSlot</li>
            <li class="lil">Dashboard</li>
            <li class="lili"><a href="" class="glyphicon glyphicon-option-vertical"></a></li>
            <li>
                                <a class="dropdown-toggle" data-toggle="dropdown">
                                    <span class="glyphicon glyphicon-option-vertical"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Change Password</a></li>
                                    <li><a href="#">Update Profile</a></li>
                                    <li><a href="#">Skills Management</a></li>
                                    <li><a href="#">Location Management</a></li>
                                </ul>
                            </li>
            <li class="li"><a href="" class="glyphicon glyphicon-stats"></a></li>
        </ul>
        </center>
                <div class="main-container" id="main-con">
                    <div class="container1">
                    <span><h1 class="h1">Recent Events</h1>
                    <h1><button class="glyphicon glyphicon-plus-sign" id="btn"></button></h1></span>
                    <span><button id="b1" type="button" class="btn btn-default"><p id="name"><h4>Angular WalkIns</h4></p></button></span>
                    <span><button id="b2" type="button" class="btn btn-default"><p id="name1"><h4>Java Walkins</h4></p></button></span>
                    </div>
                    <div class="container2">
                    <h1 class="upc">Upcoming Events</h1>
                    <span><button id="b3" type="button" class="btn btn-default"><p id="name1"><h4>.Net Walkins</h4></p></button></span>
                    
                    <span><button id="b4" type="button" class="btn btn-default"><p id="name"><h4>Informatica Walkins</h4></p></button></span>
                    </div>
                </div>
            </div>
            </center>
            </div>
        );
    }
}

export default Demo;