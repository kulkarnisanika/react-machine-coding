import { useContext } from 'react'
import { CounterContext } from './GlobalContext'


const Counter = () => {

    const { counter, setCounter } = useContext(CounterContext);
    return (
        <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", border: "solid gray 4px", padding: "30px" }}>
            <h2>Current Counter {counter}</h2>
            <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
        </div>
    )
}

export default Counter