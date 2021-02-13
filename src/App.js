import {useState} from 'react'
import './App.css';
import {Transition,animated} from 'react-spring/renderprops'
import Components1 from './components/Components1';
import Components2 from './components/Components2';
import Components3 from './components/Components3';
function App() {
 const [state,setState]=useState({showComponent3:false})
 console.log(state)
  return (
    <div className="App">
    <Components1/>
    <Components2 state={state} setState={setState}/>
    <Transition
    native
    items={state}
    from={{opacity:0}}
    enter={{opacity:1}}
    leave={{opacity:0}}
    >
    {show=>show && (props=>(
      <animated.div style={props}>
      <Components3/>
      </animated.div>
    )) }
    </Transition>
    </div>
  );
}

export default App;
