import React, {useEffect} from 'react'
import useApi from '../hooks/useApi'
import eventsApi from '../api/events'
import '../styles/Body.css'
import Warning from './Warning'

//Events component used to display information retreived from events api
export default function Events() {
  const getEventsApi = useApi(eventsApi.getEvents)

  useEffect(() => {
    getEventsApi.request();
  }, [])

  return (
    <div className='flex-container'>
      {/*Sets loading and errors for Events*/}
      {getEventsApi.loading && <p>Events are Loading!</p>}
      {getEventsApi.error && <p><Warning errorTxt={getEventsApi.error} /></p>}
      {/*Creates a div for each Event*/}
      {getEventsApi.data?.map((event) => (
        <div key={event.id} className='flex-item'>
          <div>{event.repo.name}</div>
          <div><a href={event.repo.url}>{event.repo.url}</a></div>
          <div>{event.type}</div>
          <div className='dt'>Created At: {event.created_at}</div>
        </div>
      ))}
    </div>
  )
}
