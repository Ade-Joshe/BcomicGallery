import React from "react";
import './search.css';
import Button from './Button'

class Search extends React.Component{
    constructor(props){
        super(props);
        state: {
            something: []
        }
    }

    render(){
        return(<div>
                <input type="search" placeholder="Enter item to search" className="Search"/>
                <Button />
            </div>
        )
    }
}

export default Search;