import React, {useEffect} from 'react'
import useApi from '../hooks/useApi'
import hooksApi from '../api/hooks'
import Warning from './Warning'

//Hooks component used to display information retreived from hooks api
export default function Hooks() {
  const getHooksApi = useApi(hooksApi.getHooks)

  useEffect(() => {
    getHooksApi.request();
  }, [])

  return (
    <div className='flex-container'>
      {/*Sets loading and errors for Hooks*/}
      {getHooksApi.loading && <p>Hooks are Loading!</p>}
      {getHooksApi.error && <Warning errorTxt={getHooksApi.error}/>}
      {/*Creates a div for each Hooks*/}
      {getHooksApi.data?.map((hooks) => (
        <p key={hooks.id}>{hooks.id} - {hooks.type} - {hooks.repo.name} - {hooks.repo.url} - {hooks.created_at}</p>
      ))}
    </div>
  )
}
