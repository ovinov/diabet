import React from 'react';
import Ice from '../../component/ice/ice'
import "./bot.css"

const Bot =()=>(
<div className="bot">
<div className="bot__firstIce">
<Ice iceStyle ="icer5"/>
</div>
<h1 className="bot__topic">Звенья патогенеза СД2</h1>
<img src={require("./ref.png")} style={{width : "1024px",height : "768px"}}/>
<div className="bot__secondIce">
<Ice iceStyle ="icer6"/>
</div>
<div className="bot__thirdIce">
<Ice iceStyle ="icer7"/>
</div>
</div>
)

export default Bot
