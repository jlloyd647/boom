import axios from 'axios'

//Base API layer - if endpoint changes, simply change the baseURL variable
const apiClient = axios.create({
  baseURL: 'https://api.github.com/orgs/boomtownroi'
})

export default apiClient