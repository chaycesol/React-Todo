import React from "react";

//import Components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";


//Start out with initial tasks hardcoded for testing
const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

//STRETCH - Local Storage

// export const useInput = (key, initialValue) => {
//   const [value, setValue] = useLocalStorage(key, initialValue);
//   const handleChanges = updatedValue => {
//     setValue(updatedValue);
//   };
//   return [value, setValue, handleChanges];
// }; 

// const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     const item = window.localStorage.getItem(key);
//     return item ? JSON.parse(item) : initialValue;
//   });
//   const setValue = value => {
//     setStoredValue(value);
//     window.localStorage.setItem(key, JSON.stringify(value));
//   };
//   return [storedValue, setValue];
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

//Toggle mark as completed class or not
  toggleItem = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

//Add a new task to the TodoList
  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

 //Clears tasks that have been marked as completed 
clearCompleted = (evt) => {
  evt.preventDefault();
  alert('Congrats, you got sh!t done, my friend!')
  this.setState({
    tasks: this.state.tasks.filter((task) => !task.completed),
  });
};

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>GET SH!T DONE!</h1>
        </div>
        <TodoForm addItem={this.addItem} />
        <TodoList
          toggleItem={this.toggleItem}
          tasks={this.state.tasks}
          clearCompleted={this.clearCompleted}
        />
         
      </div>
    );
  }
}

export default App;


// filter all purchased, and toggle purchased value to "false"
