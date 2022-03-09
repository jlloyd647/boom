import client from './client'

//Calls the repos api
const getRepos = () => client.get('/repos')

export default {
  getRepos
}