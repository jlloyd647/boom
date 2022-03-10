import React from 'react'
import ReposBS from './ReposBS'
import EventsBS from './EventsBS'
import MembersBS from './MembersBS'
import '../../styles/Tabs.css'
import { Tabs, Tab} from 'react-bootstrap'
import HooksBS from './HooksBS'
import IssuesBS from './IssuesBS'

//Tabs used to display API informaition
function TabsBS() {
  return (
    <div className='bs-tabs'>
      {/*Tabs used from React-Bootstrap*/}
      <Tabs 
        id='tabs'
        defaultActiveKey='repos'
        transition={false}
        className='mb-3'
      >
        {/*Individual tabs for each API call*/}
        <Tab className='bs-tab' eventKey='repos' title='Repos'>
          <ReposBS />
        </Tab>
        <Tab eventKey='events' title='Events'>
          <EventsBS />
        </Tab>
        <Tab eventKey='hooks' title='Hooks'>
          <HooksBS />
        </Tab>
        <Tab eventKey='issues' title='Issues'>
          <IssuesBS />
        </Tab>
        <Tab eventKey='members' title='Members'>
          <MembersBS />
        </Tab>
      </Tabs>
    </div>
  )
}

export default TabsBS