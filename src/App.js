import logo from './logo.svg';
import './App.css';
import SimpleGame from './SimpleGame';
import ConnectFour from './games/connect-four/ConnectFour';

function App() {
  return (    
    <>
      <SimpleGame />
      <ConnectFour />
    </>
  );
}

export default App;
