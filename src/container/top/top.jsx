import React from 'react';
import Animatepoint from '../../component/animatepoint/animatepoint'
import Topic from '../../component/topic/topic'
import "./top.css"
const Top =()=>(
<div className="top">
<h1 className="top__Topic">Всегда ли цели терапии СД2 <br/>на поверхности?</h1>
<div className="top__firstPoint">
<Animatepoint animateclass="top__firstPoint__animate" wrapperclass="top__firstPoint__wrapper"/>
<Topic topic="Цель по HbA1c" topicClass="top__firstPoint__topic"/>
</div>
<div className="top__secondPoint">
  <Topic topic="Гипогликемия" topicClass="top__secondPoint__topic"/>
<Animatepoint animateclass="top__secondPoint__animate" wrapperclass="top__secondPoint__wrapper"/>
</div>
<div className="top__thirdPoint">
<Topic topic="СС риски" topicClass="top__thirdPoint__topic"/>
<Animatepoint animateclass="top__thirdPoint__animate" wrapperclass="top__thirdPoint__wrapper"/>
</div>
<div className="top__fourthPoint">
<Topic topic="Осложнения СД" topicClass="top__fourthPoint__topic" />
<Animatepoint animateclass=".top__thirdPoint__animate" wrapperclass="top__thirdPoint__wrapper"/>
</div>
</div>
)

export default Top
