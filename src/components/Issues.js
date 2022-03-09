import React, {useEffect} from 'react'
import useApi from '../hooks/useApi'
import issuesApi from '../api/issues'
import Warning from './Warning'

//Issues component used to display information retreived from issues api
export default function Issues() {
  const getIssuesApi = useApi(issuesApi.getIssues)

  useEffect(() => {
    getIssuesApi.request();
  }, [])

  return (
    <div className='flex-container'>
      {/*Sets loading and errors for Issues*/}
      {getIssuesApi.loading && <p>Issues are Loading!</p>}
      {getIssuesApi.error && <Warning errorTxt={getIssuesApi.error}/>}
      {/*Creates a div for each Issues*/}
      {getIssuesApi.data?.map((issue) => (
        <p key={issue.id}>{issue.id} - {issue.name} - {issue.html_url} - {issue.description} - {issue.language} - {issue.created_at} 
        {issue.updated_at} - {issue.pushed_at}</p>
      ))}
    </div>
  )
}
