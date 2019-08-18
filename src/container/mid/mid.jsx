import React from 'react';
import Ice from '../../component/ice/ice'
import "./mid.css"
const Mid =({ parallax })=>(
<div className="mid">
<h1 className="mid__topic">Основа терапии - <br/>патогенез СД2</h1>
<div className="mid__firstIce" style={{top:50 + parallax *0.1  +"px"}}>
<Ice iceStyle ="icer"/>
</div>
<div className="mid__secondIce" style={{top:180 + parallax *0.1  +"px"}}>
<Ice iceStyle ="icer2"/>
</div>
<div className="mid__thirdIce" style={{top:450 + parallax *0.1  +"px"}}>
<Ice iceStyle ="icer3"/>
</div>
<div className="mid__fourthIce" style={{top:600+ parallax *0.1  +"px"}}>
<Ice iceStyle ="icer4"/>
</div>
</div>
)
export default Mid
