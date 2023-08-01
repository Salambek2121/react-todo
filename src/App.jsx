import { useState } from 'react'
import style from './App.module.css'


function App() {
  
  const [todos,setTodos] = useState( [   {
    text: 'купить бананы',
    favorite: false
  },
  {
    text: 'продать кавартиру',
    favorite: true
  },
  {
    text: 'выучить уроки по JS',
    favorite: true
  }
]) 

  const [text ,setText] = useState(''); 
  const deleteTodo = (i) => {
    const filtered = todos.filter((item,index) => {
      if(index === i){
        return false
      }
      return true

    })
    setTodos(filtered)
  }

  const makeFavorite = (i) => {
  const newTodos = todos.map((item,index) => {
    if(i === index){
      return {
        ...item,
        favorite: !item.favorite
      }
    }
    return item
  })  
  setTodos(newTodos)
  }

  const newTodos = todos.map((item,index) => {

   
    
    return (
      <>
      
        <div className={item.favorite ? style.selected : style.todo} >
          <div className={style.favorite}>
            <button onClick={() => makeFavorite(index)}>★</button>
          </div>
          <div className={style.todo1}>
            {item.text}
          </div>
          <div className={style.actions}>
            <button onClick={()=> deleteTodo(index)}>❌</button>
          </div>
        </div>
      </>
    )
  })
const addTodo = () =>{
setTodos([
  {
    text: text,
    favorite: false
  },
  ...todos
])
setText('')
}
  return (
    <div className={style.app}>
      <div className={style.header}>список дел</div>
      <div className={style.form}>
        <input type="text" 
      value={text} 
      onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>добавить</button>
      </div>
      <div className={style.todos}>
        {newTodos}
      </div>
    </div>
  )
}

export default App
