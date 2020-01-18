import axios from 'axios'

export default  axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: 'Client-ID 06c6e6b62ebe7c01d8f55c93bbe389be4d230dd8ad9c8bcc014af7d7350689ae' }
});