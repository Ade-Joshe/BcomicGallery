import React from "react";



const Preferences = [
    'Aniamtion',
    'Drama',
    'Horror',
    'Action',
    'Comedy'
]

class Checkbox extends React.Component{
    // constructor(props){
    //     super(props);
    //     state: {
    //         something: []
    //     }
    // }
    ComponentMount = () => {
        this.selectedCheckboxes = new Set();
    }

        toggleCheckbox = label => {
            if(this.selectedCheckboxes.has(label)) {
                this.selectedCheckboxes.delete(label);
            } else {
                this.selectedCheckboxes.add(label);
            }
        }

        handleSubmit = formSubmit => {
            formSubmit.preventDefault();

            //function to populate db goes here
        }
        createCheckbox =  label => (
            <Checkbox label={label} handleCheckboxChange={this.toggleCheckbox} key={label} />
        )

        createCheckboxes = () => {
            Preferences.map(this.createCheckbox)
        }
    render(){
        return(<div style={{backgroundImage: "url(" + { background } + ")"
    }} >
                <form>
                    {/* {this.createCheckboxes} */}
                    <input type="checkbox" /> Animation 
                    <input type="checkbox" /> Drama 
                    <input type="checkbox" /> Comedy 
                    <input type="checkbox" /> Horroe 
                    <input type="checkbox" /> Animation 
                    <input type="checkbox" /> Animation 
                    
                    <button type="submit"> Subscribe </button>
                </form>
            </div>
        )
    }
}

export default Checkbox;