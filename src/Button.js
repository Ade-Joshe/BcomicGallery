import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(<div>
            <button style={{color: 'orange'}}>Submit</button>
            </div>
        )
    }
}

export default Button;