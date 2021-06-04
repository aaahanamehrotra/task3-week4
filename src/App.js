import React, { useState } from "react";

function App() {
  const [res, setres] = useState([])
  const fetchData = async() => {
    const data = await (await fetch('https://api.spacexdata.com/v4/launches/upcoming')).json();
    data.forEach(element => {
      console.log(element.id)
    });
    setres(data.map((x) => {
      return {
        name: x.name,
        time: x.date_utc,
        id : x.id,
      };
    }))
  };
  return (
    <div className="App">
      <div className="container">
      <h1>Upcoming SpaceX Events</h1>
      <button className="Button" onClick={fetchData}>Fetch Events</button>
      </div>
      <div className="list">
      <ul>
        <li key={"header"} className="item">
            <div className="headName">Name</div>
            <div className="headTime">UTC Time</div>
        </li>
        {res.map((a) => (
          <li key ={a.id} className="item">
            <div className="name">{`${a.name}`}</div>
            <div className="time">{`${a.time}`}</div>
          </li>
        ))}
      </ul>
      </div>
      </div>
  );
}

export default App;