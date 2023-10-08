import React from 'react';


const Header = ({children,width,textAlign})=>{
    const style = {
        backgroundColor:"#483d8b",
        height : "80px",
        lineHeight: "80px",
        width,
        margin : "auto",
        textAlign : textAlign?"center":""
    }

    return <div style={style}>{children}</div>
}

export default Header