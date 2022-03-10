import React, {useEffect} from 'react'
import useApi from '../../hooks/useApi'
import reposApi from '../../api/repos'
import Warning from '../Warning'
import Table from 'react-bootstrap/Table'

//Repo component used to display information retreived from repos api
export default function ReposBS() {
  const getReposApi = useApi(reposApi.getRepos)

  {/*Hits Repos Api on page load*/}
  useEffect(() => {
    getReposApi.request();
  }, [])

  return (
    <>
      {/*Tables used from React-Bootstrap*/}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>URL</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Pushed At</th>
          </tr>
        </thead>
        <tbody>
          {/*For each returned result, we create an item in the table*/}
          {getReposApi.data?.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.name}</td>
              <td>{repo.language}</td>
              <td><a href={repo.html_url}>{repo.full_name}</a></td>
              <td>{repo.description}</td>
              <td>{repo.created_at}</td>
              <td>{repo.updated_at}</td>
              <td>{repo.pushed_at}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/*Displays loading and warning*/}
      {getReposApi.loading && <p>Repos are Loading!</p>}
      {getReposApi.error && <Warning errorTxt={getReposApi.error}/>}
    </>
  )
}
