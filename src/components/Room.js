import React,{ useState}  from 'react';
import '../Room.css'

function Room() {
    let [isLit,setlit] = useState(false)
    let [Counter,CounterFun] = useState(0)



    function updateLit(){
        console.log("button clicked")
        setlit(!isLit)
    }
    function MyCounterF(){
        CounterFun(++Counter)
    }

        return (
            <div className={`room ${isLit? 'lit': 'dark'}`}>
                This is Room Component
        <p>The Room  is {isLit? "lit":"Dark"}</p>
        <button onClick={updateLit}>Toggle Light</button>
        <p> Counter value {Counter}</p>
        <button onClick={MyCounterF}>Click for Count</button>

            </div>
        );
    
}

export default Room
