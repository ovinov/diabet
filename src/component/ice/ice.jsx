import React from 'react'
import "./ice.css"

const Ice = ({iceStyle}) =>(
<div >
<img className={iceStyle} src={require('./ice1.png')} alt="ice"/>
</div>
)

export default Ice;
