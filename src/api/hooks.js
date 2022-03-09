import client from './client'

//Calls the hooks api
const getHooks = () => client.get('/hooks')

export default {
  getHooks
}