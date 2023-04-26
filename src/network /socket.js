import { io } from 'socket.io-client'

constructor(baseURL) {
  this.io = io(baseURL, {
    withCredentials: true,
    path: '/api/socket.io',
  });   
}