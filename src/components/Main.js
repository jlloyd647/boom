import React, {useEffect, useState} from 'react'
import useApi from '../hooks/useApi'
import orgApi from '../api/org'
import '../styles/Main.css'

import { VscVerified, VscUnverified } from 'react-icons/vsc'
import TabsBS from './BootStrapSite/TabsBS'
import Tabs from './Tabs'
import Warning from './Warning'

export default function Main() {
  const getOrgApi = useApi(orgApi.getOrg)
  const [useBootstrap, setUseBootstrap] = useState (true)

  useEffect(() => {
    getOrgApi.request();
  }, [])

  //Function to compair create and updated dates
  const compDates = () => {
    var d1 = Date.parse(getOrgApi.data?.created_at);
    var d2 = Date.parse(getOrgApi.data?.updated_at);
    return (d1 < d2)
  }

  //Function to create Tooltip
  const renderTooltip = (props) => {
    <Tooltip id='isVerified' {...props}>
      URL is verifiecd
    </Tooltip>
  }

  return (
    <div className='grid-container'>
      <div className='grid-header'>
        <div hidden={getOrgApi.loading || getOrgApi.error !=null}>
          {/*Sets loading and errors for Org*/}
          {getOrgApi.loading && <p>Org is Loading</p>}
          {getOrgApi.error && <p><Warning errorTxt={getOrgApi.error} /></p>}
        </div>
        {/*Populates Org information - React-Icon displayed is dependent on is_verified*/}
        <div>
          <img className='avatar-image' src={getOrgApi.data?.avatar_url} alt='img failed to load' />
        </div>
        
        <div>
          {/*displays verified or unverified icon*/}
          <h1>{getOrgApi.data?.name} {getOrgApi.data?.is_verified ? <VscVerified /> : <VscUnverified />}
          </h1>
          <h5>{getOrgApi.data?.html_url}</h5>
          {/*Date with greater className is displayed in blue*/}
          <h6 className={` ${!compDates()?'greater':null}`}>
            Created: {getOrgApi.data?.created_at} 
          </h6>
          <h6 className={` ${compDates()?'greater':null}`}>
            Updated: {getOrgApi.data?.updated_at}
          </h6>
          <button className='bs-btn' onClick={() => setUseBootstrap(!useBootstrap)}>Use Bootstrap</button>
        </div>
      </div>
      <div className='grid-body'>
        {/*Calls Tabs component for body display*/}
        {useBootstrap?<Tabs />:<TabsBS />}
      </div>
    </div>
  )
}
