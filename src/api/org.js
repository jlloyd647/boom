import client from './client'

//calls the top level of the api
const getOrg = () => client.get('')

export default {
  getOrg
}