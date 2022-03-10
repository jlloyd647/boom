import React, {useEffect} from 'react'
import useApi from '../../hooks/useApi'
import { RiAdminFill,RiUser2Fill } from 'react-icons/ri'
import membersApi from '../../api/members'
import publicMembersApi from '../../api/publicmembers'
import Warning from '../Warning'
import Table from 'react-bootstrap/Table'

//Member component used to display information retreived from members api
export default function MembersBS() {
  const getMembersApi = useApi(membersApi.getMembers)
  const getPublicMembersApi = useApi(publicMembersApi.getPublicMembers)

  {/*Hits Members & Public Members Api on page load*/}
  useEffect(() => {
    getMembersApi.request();
    getPublicMembersApi.request();
  }, [])

  return (
    <>
      {/*Tables used from React-Bootstrap*/}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Login</th>
            <th>Type</th>
            <th>Public Member</th>
          </tr>
        </thead>
        <tbody>
          {/*For each returned result, we create an item in the table*/}
          {getMembersApi.data?.map((member) => (
            <tr key={member.id}>
              <td><img className='mem-avatar' src={member.avatar_url} alt='No Image Found' /></td>
              <td><a href={member.html_url}>{member.login}</a></td>
              <td>{member.type}{member.site_admin ? <RiAdminFill /> : <RiUser2Fill />}</td>
              <td>No</td>
            </tr>
          ))}
          {/*For each returned result, we create an item in the table*/}
          {getPublicMembersApi.data?.map((member) => (
            <tr key={member.id}>
              <td><img className='mem-avatar' src={member.avatar_url} alt='No Image Found' /></td>
              <td><a href={member.html_url}>{member.login}</a></td>
              <td>{member.type}{member.site_admin ? <RiAdminFill /> : <RiUser2Fill />}</td>
              <td>Yes</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/*Displays loading and warning*/}
      {getMembersApi.loading && <p>Members are Loading!</p>}
      {getMembersApi.error && <Warning errorTxt={getMembersApi.error}/>}
    </>
  )
}
