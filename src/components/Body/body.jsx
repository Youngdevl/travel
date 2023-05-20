/* eslint-disable no-unused-vars */
import React from 'react'
import './body.css'
import 'animate.css';
import logo1 from '../images/banner/01.png'
const body = () => {
  return (
    <div>
      <div className="flex">
  <div className="flex-1 w-64 ..." id='left-side'>
    <h1 className='animate__animated animate__rubberBand'>It’s A Big World<br/>
     Out There, Go<br/>
      Explore</h1>
      <p>Conveniently customiz proactiv web service for<br/>
       leveraged without continualliery aggregate fricctionle<br/>
        ou wellies richard.and very customize continually.</p>
        <div>
        <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get Expolration
          </button>
          &nbsp;
          <button id='second'
            type="button"
            className="inline-flex items-center rounded-md bg-white-600 px-3 py-2 text-xl font-semibold text-indigo shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Read More
          </button>
        </div>
  </div>
  <div className="flex-1 w-32 ..." id='right-side'>
    <img src={logo1}/>

  </div>
</div>
    </div>
  )
}

export default body
