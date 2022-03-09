import client from './client'

//Calls the events API
const getEvents = () => client.get('/events')

export default {
  getEvents
}