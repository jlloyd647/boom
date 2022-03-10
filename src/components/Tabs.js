import React, { useState } from 'react'
import Repos from './Repos.js'
import '../styles/Tabs.css'
import Events from './Events.js'
import Hooks from './Hooks.js'
import Issues from './Issues.js'
import Members from './Members.js'

//Tabs used to display API informaition
function Tabs() {
  const [index, setIndex] = useState(0)
  return (
    <div className='tabs'>
      <div className='tabs-list'>
        {/*Tabs activate depending on which tab is selected - selected tab modifies index variable */}
        <div className={`tab-head ${index===0?'active':null}`} onClick={()=>{setIndex(0)}}>Repos</div>
        <div className={`tab-head ${index===1?'active':null}`} onClick={()=>{setIndex(1)}}>Events</div>
        <div className={`tab-head ${index===2?'active':null}`} onClick={()=>{setIndex(2)}}>Hooks</div>
        <div className={`tab-head ${index===3?'active':null}`} onClick={()=>{setIndex(3)}}>Issues</div>
        <div className={`tab-head ${index===4?'active':null}`} onClick={()=>{setIndex(4)}}>Members</div>
      </div>
      {/* divs are hidden unless index matches - Tabs display API components*/}
      <div className='tabs-content' hidden={index!==0}>
        <Repos />
      </div>
      <div className='tabs-content' hidden={index!==1}>
        <Events />
      </div>
      <div className='tabs-content' hidden={index!==2}>
        <Hooks />
      </div>
      <div className='tabs-content' hidden={index!==3}>
        <Issues />
      </div>
      <div className='tabs-content' hidden={index!==4}>
        <Members />
      </div>
    </div>
  )
}

export default Tabs