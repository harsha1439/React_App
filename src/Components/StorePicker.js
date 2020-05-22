import React from 'react'
import '../Components/Style.css'

class StorePicker extends React.Component {

    render(){
        return (
            <form className="store-selector">
                <h2>Please Enter a store Name</h2>
                <input type = "text"></input>
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker