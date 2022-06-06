import logo from './logo.svg';
import './App.css';
// import Home from './Component/Home';
import { lazy, Suspense } from 'react';
const Home = lazy(()=>import('./Component/Home'))
const About = lazy(()=>import('./Component/About'))
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
      <h1>Component is Load</h1>
      <Suspense fallback={<div>Please wait....</div>}>
        <Home list={data}/>
        <About />
      </Suspense>
    </div>
  );
}

export default App;
