import { useCallback, useMemo, useReducer, useState } from 'react'
import Todo from './Todo'

let initialState = 0

const reducer = (state , action) => {
  
  switch(action.type){
    case 'inc' :
      return state+1 
    case 'dec' :
      if(state === 0){
        alert('you')
        return state
      }
      return state-1
     default :
     return state 

  }
  
 
}

function App() {
  const [count, setCount] = useState(0)
  const [data , setData] = useState(0)
  const [dataa , setDataa] = useState()
  const [state , dispatch] = useReducer(reducer , initialState)

const add = useMemo(()=>{ 

  const ranf = Math.random().toFixed(2)
  console.log(ranf)
  
  return ranf
  
} , [dataa])
  const uC = useCallback(()=>{
      setData(data+1)
  } , [data])

  return (
    <>
      <div>
      <div>
        USE CALLBACK FUNCTIONALITY
        <Todo aa={uC} data={data}/>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>Addition</button>
      </div>
      <div>
      USE MEMO FUNCTIONALITY
      <p>{dataa}</p>
      <button onClick={() =>{
        setDataa(add)
      }}>Data buton</button>
      </div>
        <br/>
      <div>
      USE Reducer FUNCTIONALITY
      <p>{state}</p>
      <button onClick={() =>{
        dispatch({type : 'inc'})
      }}>add buton</button>
      <button onClick={() =>{
       dispatch({type : 'dec'})
      }}>sub buton</button>
      </div>
      </div>
    </>
  )
}

export default App
