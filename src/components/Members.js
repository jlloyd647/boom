import React, {useEffect} from 'react'
import useApi from '../hooks/useApi'
import membersApi from '../api/members'
import publicMembersApi from '../api/publicmembers'
import Warning from './Warning'
import { RiAdminFill,RiUser2Fill } from 'react-icons/ri'
import '../styles/Body.css'

//Repo component used to display information retreived from members api
export default function Members() {
  const getMembersApi = useApi(membersApi.getMembers)
  const getPublicMembersApi = useApi(publicMembersApi.getPublicMembers)
  useEffect(() => {
    getMembersApi.request();
    getPublicMembersApi.request();
  }, [])

  return (
    <div className='flex-container'>
      {/*Sets loading and errors for Members*/}
      {getMembersApi.loading && <p>Members are Loading!</p>}
      {getMembersApi.error && <Warning errorTxt={getMembersApi.error}/>}
      {/*Creates a div for each Members*/}
      {getMembersApi.data?.map((member) => (
        <div key={member.id} className='flex-item'>
          <div className='flex-mem'>
            <img className='mem-avatar' src={member.avatar_url} alt='No Image Found' />
            <div className='flex-mem-info'>
              <a href={member.html_url}>{member.login}</a>
              <div>{member.type}{member.site_admin ? <RiAdminFill /> : <RiUser2Fill />}</div>
            </div>
          </div>
        </div>
      ))}
      {/*Creates a div for each Public Member*/}
      {getPublicMembersApi.data?.map((member) => (
        <div key={member.id} className='flex-item'>
          <div className='flex-mem'>
            <img className='mem-avatar' src={member.avatar_url} alt='No Image Found' />
            <div className='flex-mem-info'>
              <a href={member.html_url}>{member.login}</a>
              <div>{member.site_admin ? <RiAdminFill /> : <RiUser2Fill />}{member.type} - public</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
