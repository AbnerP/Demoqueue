import './App.css';
import {useEffect, useState} from "react";


function App() {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/test').then(res => res.json()).then(data => {
        console.log(data);
        console.log(data.returnNum);
      setCurrentTime(data.returnNum);
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h2>Enter a room code or <a href="">log in</a> to create an event</h2>
        <h2>{currentTime}</h2>
        <form action="/action_page.php">
            <label htmlFor="roomCode">Room Code:</label>
            <input type="text" id="roomCode" name="roomCode" value="" />
            <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
