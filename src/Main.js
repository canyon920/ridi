import Socket from './network/socket'

const baseURL = import.meta.env.VITE_HOST.URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
const socket = new Socket(baseURL);

root.render(<App socket={socket}></App>)