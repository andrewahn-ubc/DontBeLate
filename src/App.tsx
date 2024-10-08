import { useEffect } from 'react'
import './App.css'

function App() {
  // const [token, setToken] = useState(0)

  useEffect(()=>{
    console.log("useEffect ran")
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => response.json())
        .then(data => console.log(data));
    });
  })
  

  return (
    <>
      <h1>Yooooo</h1>
      
    </>
  )
}

export default App
