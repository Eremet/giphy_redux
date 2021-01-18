import React from 'react'
import {connect} from 'react-redux'
function Output(props) {
    return (
        <div>
            {
                props.weather[0] ? 
                <>
                    <h1>Country: {props.weather[0].name}</h1>
                    <h3>Country: {props.weather[0].main.temp - 273.15} C</h3>
                </>
                :<h1>ДАННЫХ НЕТ ...</h1>
            }
        </div>
    )
}
function mapStateToProps({weather}){
    return {weather}
}
export default connect(mapStateToProps)(Output)