import React ,{memo} from 'react'

const Todo = (props) => {
   
  return (
    <div>Todo
     
     
    <br/>
      {props.data}
     <br/>
      <button onClick={props.aa}>Todo Button</button>
    </div>
  )
}

export default memo(Todo)