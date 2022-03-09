import client from './client'

//Calls the issues api
const getIssues = () => client.get('/issues')

export default {
  getIssues
}