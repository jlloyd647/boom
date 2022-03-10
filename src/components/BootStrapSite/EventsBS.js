import React, {useEffect} from 'react'
import useApi from '../../hooks/useApi'
import eventsApi from '../../api/events'
import Warning from '../Warning'
import Table from 'react-bootstrap/Table'

//Event component used to display information retreived from events api
export default function EventsBS() {
  const getEventsApi = useApi(eventsApi.getEvents)

  {/*Hits Events Api on page load*/}
  useEffect(() => {
    getEventsApi.request();
  }, [])

  return (
    <>
      {/*Tables used from React-Bootstrap*/}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Type</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
        {/*For each returned result, we create an item in the table*/}
          {getEventsApi.data?.map((event) => (
            <tr key={event.id}>
              <td>{event.repo.name}</td>
              <td><a href={event.repo.url}>{event.repo.url}</a></td>
              <td>{event.type}</td>
              <td>{event.created_at}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/*Displays loading and warning*/}
      {getEventsApi.loading && <p>Events are Loading!</p>}
      {getEventsApi.error && <Warning errorTxt={getEventsApi.error}/>}
    </>
  )
}
