import React, {useEffect} from 'react'
import useApi from '../hooks/useApi'
import reposApi from '../api/repos'
import Warning from './Warning'
import '../styles/Body.css'

//Repo component used to display information retreived from repos api
export default function Repos() {
  const getReposApi = useApi(reposApi.getRepos)

  useEffect(() => {
    getReposApi.request();
  }, [])

  return (
    <div className='flex-container'>
      {/*Sets loading and errors for Repos*/}
      {getReposApi.loading && <p>Repos are Loading!</p>}
      {getReposApi.error && <Warning errorTxt={getReposApi.error}/>}
      {/*Creates a div for each Repos*/}
      {getReposApi.data?.map((repo) => (
        <div key={repo.id} className='flex-item'>
          <div>{repo.name} - {repo.language}</div>
          <a href={repo.html_url}>{repo.full_name}</a>
          <div></div>
          <div>{repo.description}</div>
          <div className='dt'>
            <div className='dt-item'>Created At: {repo.created_at}</div>
            <div className='dt-item'>Updated At: {repo.updated_at}</div>
            <div className='dt-item'>Pushed At: {repo.pushed_at}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
