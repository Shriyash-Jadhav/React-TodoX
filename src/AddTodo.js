import React, {useState, useEffect} from 'react';
import Todo from './Todo';
function AddTodo() {
    const localTodos = JSON.parse(localStorage.getItem("todo"));
  const [inputVal, setInputVal] = useState("");
  const [todo, setTodo] = useState( localTodos || []);
 
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  },[todo]);
  
    useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todo"));
    if (todo) {
      setTodo(todo);
    } 
  }, []);
  const inputEvent = (e) => {
    setInputVal(e.target.value);
  }
  const inputSubmit = () => {
    setTodo((oldTodo) => {
      return [...oldTodo, inputVal];
    });
    setInputVal(" ");
  };
  const deleteItems = (id) => {
     setTodo((oldTodo) => {
      return oldTodo.filter((inputVal, index) => {
        return index !== id;
      });
    });
  };
    return (
             <div className="App">
      <h1 className="todo-header">Todo App</h1>
      <div class="input-group mb-4 ">
      <input type="text" class="form-control"  placeholder="Enter Your Todo..." value={inputVal} onChange={inputEvent}  aria-describedby="button-addon2" />
      <div class="input-group-append">
     <button class="btn btn-outline-primary" style={{width:"100px"}} type="button" id="button-addon2" onClick={inputSubmit}>Add</button>
    </div>
      </div>
    
      <div className="todo-list">
           {todo && todo.length === 0 && (
                  <p className="text-primary my-3">NO TODO TO COMPLETE</p>
                )}
         {todo.map((data, index) => (
          <Todo value={data} key={index} id={index} onSelect={deleteItems}/>
        ))}
     </div>
    </div>
    )
}

export default AddTodo
