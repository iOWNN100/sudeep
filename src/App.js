import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import Box from './Components/Box';
import { useState } from 'react';


function App() {
  const [todos,setToDo] = useState([{
    name:"todo",
    time: new Date()
  }]);


  const removeToDo = (name) => {
    // const alldata=todos;
    // alldata.pop()
    setToDo(todos.filter((item)=> item.name !== name))

  }

  const addToDoHandler = (item) => {
   console.log("item",item)
    setToDo((todos)=>[...todos,item])
  }

 console.log("todo list ",todos);
  return (
    <div className="bg-black h-screen p-8">
      <div className='mx-auto rounded max-w-[750px] min-h-[550px] shadow-2xl bg-white'>


        <Input handler={addToDoHandler}/>
        <Box data={todos} removeHandler={removeToDo}/>
      </div>
    </div>
  );
}


export default App;
