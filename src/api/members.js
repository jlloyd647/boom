import client from './client'

//Calls the members api
const getMembers = () => client.get('/members')

export default {
  getMembers
}