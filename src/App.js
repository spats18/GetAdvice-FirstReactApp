// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

import {useEffect, useState} from "react";
function App(){
    const [advice, setAdvice] = useState("Click on the button to get an advice");
    // setAdvice is the setter function that we use to update the value of state i.e. advice
    const [count, setCount] = useState(0);
    async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount(c => c+1);
        // whenever the getAdvice is called, setAdvice will update the value of advice
    }

    useEffect(function () {
        getAdvice()
    }, []);
    return (
        <div>
        {/* to run any javascript code inside html tags*/}
            <h1>{advice}</h1>
            <button onClick={getAdvice}>Get advice</button>
            <Message count={count}/>
        {/* Adding it like an HTML component*/}
        </div>
    );
}

function Message(props) {
    return (<p>
        You have read <strong>{props.count}</strong> pieces of advice
    </p>);
}

export default App;