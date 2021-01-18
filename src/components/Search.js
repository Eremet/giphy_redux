import React, {useState} from 'react'
import {getWeather} from '../action'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function Search(props) {
    const [val, setVal]=useState('')

    const searchGiphyByName = event =>{
        event.preventDefault();
        props.getWeather(val)
        setVal('')
    }
    return (
        <div>
            <form onSubmit={searchGiphyByName}>
                <input type="text"
                    value={val}
                    placeholder="enter country"
                    onChange={(event)=>{
                        setVal(event.target.value)
                    }}
                   
                />
                <button>Search</button>
            </form>
        </div>
    )
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({getWeather}, dispatch)
}
export default connect(null, mapDispatchToProps)(Search)