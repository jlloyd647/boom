import React, {useEffect} from 'react'
import useApi from '../../hooks/useApi'
import hooksApi from '../../api/hooks'
import Warning from '../Warning'
import Table from 'react-bootstrap/Table'

//Hook component used to display information retreived from hooks api
export default function HooksBS() {
  const getHooksApi = useApi(hooksApi.getHooks)

  {/*Hits Hooks Api on page load*/}
  useEffect(() => {
    getHooksApi.request();
  }, [])

  return (
    <>
      {/*Tables used from React-Bootstrap*/}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>URL</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Pushed At</th>
          </tr>
        </thead>
        <tbody>
          {/*For each returned result, we create an item in the table*/}
          {getHooksApi.data?.map((hook) => (
            <tr key={hook.id}>
              <td>{hook.name} - {hook.language}</td>
              <td><a href={hook.html_url}>{hook.full_name}</a></td>
              <td>{hook.description}</td>
              <td>{hook.created_at}</td>
              <td>{hook.updated_at}</td>
              <td>{hook.pushed_at}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/*Displays loading and warning*/}
      {getHooksApi.loading && <p>Hooks are Loading!</p>}
      {getHooksApi.error && <Warning errorTxt={getHooksApi.error}/>}
    </>
  )
}
