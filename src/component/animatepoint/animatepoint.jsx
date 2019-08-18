import React from 'react';
import './animatepoint.css'

const animatepoint = ({animateclass, wrapperclass}) =>
(
  <div  className={wrapperclass}>
<div className={animateclass}></div>
</div>
)
export default animatepoint;
