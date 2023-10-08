import React from 'react';
import './sorting/SortVisualizer.css'
const Button = ({value,onClickListener,disable}) =>{
    const style = {
        cursor : disable ? " wait " : "pointer",
        margin: "5px",
        borderRadius: "2px",
        height: "40px",
        backgroundColor: "rgb(0, 116, 217)",
        fontSize: "15px",
        borderStyle: "none",
        border: "1px solid",
        textTransform: "uppercase",
        fontFamily: "Lucida Console",
    }
    return <input style = {style}
                  type="button"
                  value={value}
                  onClick={()=>disable? "" : onClickListener()}/>
}
export default Button