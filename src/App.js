//import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Room from './components/Room'
import MediaCard from './components/MediaCard'

function App() {
  return (
    <div className="App">
      <MediaCard name='Qurban Ali gujjar' heroname ='Ali'/>
      <Room/>
      <Hello name ='Qurban Ali'/>
      
      
    </div>
  );
}

export default App;
