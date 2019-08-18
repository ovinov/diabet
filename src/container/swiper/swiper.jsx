import React,{ Component } from 'react';
import './swiper.css';
import PointScroll from '../../component/pointscroll/pointscroll'
import Shadow from "../../component/shadow/shadow"
import Top from "../top/top"
import Mid from "../mid/mid"
import Bot from "../bot/bot"
class Swiper extends Component {
state = {
  touchPoint: 0,
  midScreen: 0,
  counter: 1,
  parallaxCount:768
}

componentWillMount(){
    localStorage.getItem('parallax') && this.setState({
      parallaxCount: JSON.parse(localStorage.getItem("parallax"))})
}
handleTouch = (e) =>{
   let point = e.targetTouches[0].screenY;
   let screen = Math.floor(e.view.innerHeight/2);
  this.setState(({ touchPoint, midScreen, parallaxCount }) =>({
    touchPoint: point,
    midScreen: screen
  }))
}
Handleend = () =>{
  if(this.state.touchPoint < this.state.midScreen && this.state.parallaxCount>-768){
    let parallax = (this.state.parallaxCount - 768)
    this.setState(prevState => ({
      counter:++prevState.counter,
      parallaxCount: parallax
    }))
      window.scrollBy({top: 768, behavior: 'smooth' })
  }
  if (this.state.touchPoint > this.state.midScreen && this.state.parallaxCount<768) {
    let parallax= (this.state.parallaxCount + 768)
  this.setState(prevState => ({
    counter:--prevState.counter,
    parallaxCount: parallax
  }))
  window.scrollBy({top: -768, behavior: 'smooth' })
}
setTimeout(()=>{
  localStorage.clear()
  localStorage.setItem('parallax',this.state.parallaxCount)
},100)
}
 render(){
  let counter =  this.state.parallaxCount + 1;
   return(
  <div className="switch"  onTouchMove={this.handleTouch} onTouchEnd={this.Handleend}>
  <PointScroll counter={this.state.parallaxCount } />
  <Shadow opacity={counter }/>
  <Top />
  <Mid parallax ={this.state.parallaxCount}/>
  <Bot />
 </div>
)
}}

export default Swiper;
