import React from 'react';
import './App.css';



function useKeyPress(key) {

  const [keyPressed, setKeyPressed] = React.useState(null);


  React.useEffect(() => {


    function handleKeyPress(event) {
      console.log(event, event.key);
      setKeyPressed(event.key);
    }

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  });


  return (key === keyPressed)
}

function App() {
  const hKeyPressed = useKeyPress("h");
  return hKeyPressed ? <h1>Pressed</h1> : <h2>Not pressed</h2>
}

export default App;
