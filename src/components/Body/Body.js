import React , {useState} from 'react'
import Background from '../Background/Background'
import Home from '../Home/Home'
import Home_1 from '../Home_1/Home_1'

export default function Body() {
    let slide=2;
    const [state ,setState] = useState(false)
    const [count , setCount] = useState(1);
    const set_State = (open) =>{
        setState(open)
    }
    const set_count = (open) =>{
       setCount(open)
    }
    return (
        <div className="container">
            <Background goToSlide={state === false ? slide : count}></Background>
            {state === false ?<Home set_State={(open)=>set_State(open)}></Home> : <Home_1 set_count={(open)=>set_count(open)}></Home_1>}
        </div>
    )
}
