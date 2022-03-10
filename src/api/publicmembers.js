import client from './client'

//Calls the public members api
const getPublicMembers = () => client.get('/public_members')

export default {
  getPublicMembers
}