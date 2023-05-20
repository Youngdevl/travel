/* eslint-disable no-unused-vars */
import React from 'react'
import side1 from '../images/packege/01.jpg'
import side2 from '../images/packege/02.jpg'
import side3 from '../images/packege/03.jpg'
import side4 from '../images/packege/04.jpg'
import './level.css'
import lad1 from '../images/shape-img/03.png'
import lad2 from '../images/shape-img/01.png'
const level = () => {
  return (
    <div id='tope'>
        <h5>Popular Packages</h5>
        <h3>Check out our popular packages</h3>
<div id='flex'>
    <div id='tip1'><img src={side1}/>
    <h4>Enjoy The Beauty Place In<br/> Greece City</h4>
    <button type="button" className="btn btn-primary btn-sm" id='hard1'>&#9733;&#9734;
&#9733;&#9733;&#9734;
&#9733;</button> &nbsp;
<button type="button" className="btn btn-secondary btn-sm" id='col'>Explore</button></div>

    <div id='tip2'><img src={side2}/>
    <h4>Enjoy The Beauty Place In<br/> Malvadis beach</h4>
    <button type="button" className="btn btn-primary btn-sm" id='hard2'>&#9733;&#9734;
&#9733;&#9733;&#9734;
&#9733;</button>&nbsp;
<button type="button" className="btn btn-secondary btn-sm" id='col'>Explore</button></div>

    <div id='tip3'><img src={side3}/>
    <h4>Enjoy The Beauty Place In<br/>Butan City</h4>
    <button type="button" className="btn btn-primary btn-sm" id='hard3'>&#9733;&#9734;
&#9733;</button>&nbsp;
<button type="button" className="btn btn-secondary btn-sm" id='col'>Explore</button></div>


    <div id='tip4'><img src={side4}/>
    <h4>Enjoy The Beauty Place In<br/> Paris</h4>
    <button type="button" className="btn btn-primary btn-sm" id='hard'>&#9734;
&#9733;&#9734;
&#9733;

</button>&nbsp;
<button type="button" className="btn btn-secondary btn-sm" id='col'>Explore</button></div>
<img src={lad2}/>
</div>
    </div>
  )
}

export default level
