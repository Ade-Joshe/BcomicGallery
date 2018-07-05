import React from "react";
import './comic.css';

class ComicCards extends React.Component{
    constructor(props){
        super(props);
        state: {
            something: []
        }
    }
 
    render(){
        return(<div className="card">
            <div className="imgLayer">
            </div>
            <div className="descr">
            <span> loremp sdgj'oabsf[v;jah rksbkdjhfvJdvl?hskDBG;sbjkv.KJB/klvdd] </span>
            </div>
        </div>
        )
    }
}

export default ComicCards;