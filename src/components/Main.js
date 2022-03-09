import React, {useEffect} from 'react'
import useApi from '../hooks/useApi'
import orgApi from '../api/org'
import '../styles/Main.css'

import { VscVerified, VscUnverified } from 'react-icons/vsc'
import Repos from '../components/Repos.js'
import Events from '../components/Events.js'
import Hooks from '../components/Hooks.js'
import Issues from '../components/Issues.js'
import Tabs from './Tabs'
import Warning from './Warning'

export default function Main() {
  const getOrgApi = useApi(orgApi.getOrg)

  useEffect(() => {
    getOrgApi.request();
  }, [])

  //Function to compair create and updated dates
  const compDates = () => {
    var d1 = Date.parse(getOrgApi.data?.created_at);
    var d2 = Date.parse(getOrgApi.data?.updated_at);
    return (d1 < d2)
  }

  return (
    <div className='grid-container'>
      <div className='grid-header grid-item'>
        <div>
          {/*Sets loading and errors for Org*/}
          {getOrgApi.loading && <p>Org is Loading</p>}
          {getOrgApi.error && <p><Warning errorTxt={getOrgApi.error} /></p>}
        </div>
        {/*Populates Org information - React-Icon displayed is dependent on is_verified*/}
        <h1>{getOrgApi.data?.name} {getOrgApi.data?.is_verified ? <VscVerified /> : <VscUnverified />}</h1>
        <h5>{getOrgApi.data?.html_url}</h5>
        {/*Date with greater className is displayed in blue*/}
        <h6 className={` ${!compDates()?'greater':null}`}>
          Created: {getOrgApi.data?.created_at} 
        </h6>
        <h6 className={` ${compDates()?'greater':null}`}>
          Updated: {getOrgApi.data?.updated_at}
        </h6>
      </div>
      <div className='grid-body grid-item'>
        {/*Calls Tabs component for body display*/}
        <Tabs />
      </div>
    </div>
  )
}
