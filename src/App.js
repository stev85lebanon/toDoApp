import React, { useRef, useState } from 'react'
import "./App.css"
const App = () => {
  const [todo,setTodo]=useState([])
const inputRef=useRef()

const handleAdd=()=>{
const text=inputRef.current.value
setTodo([...todo,{complited:false,text}])
// console.log(text)
inputRef.current.value=""


}
const handleRemove=(index)=>{
  const newitem=[...todo]
newitem.splice(index,1)
  setTodo(newitem)
}
const handlelinethrou=(index)=>{
 const newtoddo=[...todo]
 newtoddo[index].complited=! newtoddo[index].complited
 setTodo(newtoddo)
}
  return (
     <div className='appContainer'>
        <div className='container'>
      <h3>To do list</h3>
      <ul>
        {todo.map(({text,complited},index)=>{
          return(
            <div key={index} className='mapitem'>
              <li style={{cursor:"pointer"}} onClick={()=>{handlelinethrou(index)}} className={complited?"childli":""}>{text}</li>
              <button onClick={()=>{handleRemove(index)}} className='removeli'>X</button>
            </div>
          )
        })}
      </ul>
      <input ref={inputRef} placeholder='enter task'/>
      <button onClick={handleAdd}>Add</button>
    </div>
     </div>
  )
}

export default App
