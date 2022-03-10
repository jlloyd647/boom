import React, {useEffect} from 'react'
import useApi from '../../hooks/useApi'
import issuesApi from '../../api/issues'
import Warning from '../Warning'
import Table from 'react-bootstrap/Table'

//Issue component used to display information retreived from issues api
export default function IssuesBS() {
  const getIssuesApi = useApi(issuesApi.getIssues)

  {/*Hits Issues Api on page load*/}
  useEffect(() => {
    getIssuesApi.request();
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
          {getIssuesApi.data?.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.name} - {issue.language}</td>
              <td><a href={issue.html_url}>{issue.full_name}</a></td>
              <td>{issue.description}</td>
              <td>{issue.created_at}</td>
              <td>{issue.updated_at}</td>
              <td>{issue.pushed_at}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/*Displays loading and warning*/}
      {getIssuesApi.loading && <p>Issues are Loading!</p>}
      {getIssuesApi.error && <Warning errorTxt={getIssuesApi.error}/>}
    </>
  )
}
