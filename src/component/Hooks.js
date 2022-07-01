import React, {useEffect,useReducer} from 'react'
import "./hooks.css"
const reducer =(stateData,action)=>{
  if(action.type==="Incr"){
    stateData+=1;
  }
  if(stateData>0 && action.type==="Decr"){
    stateData-=1;
  }
  return stateData;

}

const  Hooks = () => {
    useEffect(()=>{
        // console.log("hi")
        alert('Welcome to hooks practice');
    },[])
    let initialData=0;
    let [stateData,dispatchData]=useReducer(reducer,initialData);
  
   

  return (
   
    <>
    <div className='Main'>
        <h1 className='Counter'>{stateData}</h1>
        <div className='btn-grp'>
        <button className='Incr' onClick={()=>dispatchData({type:"Incr"})} >Increament</button>
        <button className='Decr' onClick={()=>dispatchData({type:"Decr"})}>Decrement</button>
        </div>
    </div>
    </>
  )
}

export default Hooks;
