import logo from './logo.svg';
import './App.css';
import './components/Greet'
import {Greet} from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Counter from './components/Counter'

import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Message></Message> */}
      <Counter></Counter>
     {/* <Greet name="Bruce" heroName="Batman"/>
     <Greet name="Clark" heroName="SuperMan"/>
     <Greet name="Dyana" heroName="WonderWoman"/>
     <Welcome name="Bruce" heroName="Batman"></Welcome>
     <Welcome  name="Clark" heroName="SuperMan"></Welcome>
     <Welcome name="Dyana" heroName="WonderWoman"></Welcome> */}


     {/* <Hello></Hello> */}
    </div>
  );
}

export default App;
