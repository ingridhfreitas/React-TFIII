import { useState } from "react"
import { FaPlus,FaMinus } from "react-icons/fa";
import "./style.css"

const SimpleCounter = () => {
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(count + 1);
    }

    const handleMinus = () => {
        setCount(count - 1)
    }

    return (
        <div className="counter_container">
            <div className="counter_number">
                <h1>{count}</h1>
            </div>
            <div className="counter_number">
                <button onClick={handleMinus}><FaMinus /></button>
                <button onClick={handlePlus}><FaPlus /></button>
            </div>
        </div>
    )
}

export default SimpleCounter