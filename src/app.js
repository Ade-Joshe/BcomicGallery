import React from 'react';
// import ButtonPanel from '../src/button.js'
import '../src/body.css'
// import ComicCards from './comicCards'
// import Search from "./search";
// import Navbar from './Navbar';
// import Checkbox from "./checkbox";
import background from './bg.jpg'
import axios from 'axios';


const API = "https://safe-caverns-84244.herokuapp.com/subscribers/subscribe";
// const ApiKey = "";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            // _id: '',
            // name: '',
            email:'',
            preferences: []
        }
    }

    handleClick(e){
        console.log("i was here")
        var email1 = document.getElementById("email").value;
        console.log(email1)
        // this.setState({
        //     email:'',
        //     preferences: []
        // })
        const message = {
            // _id: this.state._id,
            // name: '',
            email: email1,
            preferences: []
        }
        axios.post(API, message)
        .then(response => {
            console.log(response);
        });
        
        console.log(message);
        e.preventDefault();
    }
    
    render(){
        return( 
        <div className="body"> 
            <div className="email">
            <form>
                <h4 className="Intro">Subcribe to get the lastest comic update</h4>
            <div style={{ textAlign: "center"}}>
                <input type="text" className="input" placeholder="Name" />
                <input type="email" className="next input" placeholder="E-mail address" id="email"/>
            </div>
            <input type="checkbox" className="check"/> <span>Drama</span>
            <input type="checkbox" className="check"/>  <span>Horror</span>
            <input type="checkbox" className="check"/>  <span>Action</span>
            <input type="checkbox" className="check"/>  <span>Comedy</span>
            <input type="checkbox" className="check"/>  <span>Romance</span>
            <input type="checkbox" className="check"/>  <span>Science Fiction</span>

           <br /> <button type="submit" className="btnSub" onClick={this.handleClick.bind(this)}> Subscribe </button>
            </form>
            </div>
        </div>)
    }
}

export default App
