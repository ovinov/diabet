import React from "react"
import"./pointscroll.css"

const PointScroll = ({counter}) =>(
  <div className="scroller">
  <div className={ counter===768 ? "pointOn" : "pointOff"}>
  </div>
  <div className={ counter===0 ? "pointOn" : "pointOff"}>
  </div>
  <div className={ counter===-768 ? "pointOn" : "pointOff"}>
  </div>
  </div>
)

export default PointScroll
