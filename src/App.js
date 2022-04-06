import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';

function App() {
 const data = [
   {fname:"Jhon",lname:"Doe",city:"alska",country:"Africa"},
   {fname:"Dull",lname:"Roy",city:"alska",country:"Australiya"},
   {fname:"Ellan",lname:"Doe",city:"barbadose",country:"Africa"},
   {fname:"mark",lname:"afarat",city:"alska",country:"japna"},
   {fname:"evram",lname:"sunny",city:"kington",country:"Africa"},
   {fname:"omniq",lname:"tuts",city:"alska",country:"Finnland"},
   {fname:"Jhon",lname:"Doe",city:"alska",country:"Africa"},
 ]
  return (
    <div className="App">
      <Home list={data}/>
    </div>
  );
}

export default App;
