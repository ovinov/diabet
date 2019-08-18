import React from "react"
import "./shadow.css"

const Shadow =({opacity}) =>(
<div className="shadow" style={{opacity: opacity}}>
  <h2>Листайте вниз</h2>
  <div className="arrow"></div>
  </div>
)

export default Shadow
