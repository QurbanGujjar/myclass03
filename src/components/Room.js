import React,{ useState}  from 'react';
import '../Room.css'

function Room() {
    let [isLit,setlit] = useState(false)
    let [Counter,CounterFun] = useState(0)
    let [Temp,temperatureFun] = useState(72)



    function updateLit(){
        console.log("button clicked")
        setlit(!isLit)
    }
    function MyCounterF(){
        CounterFun(++Counter)
    }
    function lightOn(){
        setlit(true)

    }
    function lightOff(){
        setlit(false)
    }
    function increaseTemp(){
        temperatureFun(++Temp)
    }
    function decreaseTemp(){
        temperatureFun(--Temp)
    }

        return (
            <div className={`room ${isLit? 'lit': 'dark'}`}>
                This is Room Component
        <p>The Room  is {isLit? "lit":"Dark"}</p>
        <button onClick={updateLit}>Toggle Light</button>
        <button onClick={lightOn}>ON</button>
        <button onClick={lightOff}>OFF</button>
        <p> Counter value {Counter}</p>
        <button onClick={MyCounterF}>Click for Count</button>
        <p>Temperatyure is = { Temp }' C</p>

        <button onClick={increaseTemp}>Increase temp</button>
        <button onClick={decreaseTemp}>Decrease temp</button>

            </div>
        );
    
}

export default Room
