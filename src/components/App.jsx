import React from "react";
var time = new Date().toLocaleTimeString();
function App() {
  const [count, setCount] = React.useState(time);
  function updateTime() {
    let x = new Date().toLocaleTimeString();
    setCount(x);
  }
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={updateTime}>get time</button>
    </div>
  );
}

export default App;
