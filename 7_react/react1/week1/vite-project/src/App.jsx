import React from "react";
import "./App.css";
const ToDo = (props) => {
  return (
    <div>
      Todo list : {props.description} , {props.day} , {props.date}
    </div>
  );
};
const ToDoItems = [
  {
    Description : 'Get out of bed',
    Day:'Wed',
    Date:'Sep 13 2017',
},
  {
    Description : 'Brush teeth',
    Day : 'Thu',
    Date : 'Sep 14 2017',
  },
  {
  Description : 'Eat breakfast',
  Day : 'Fri',
  Date : 'Sep 15 2017',
},
];
function App() {
  return (
    <>
      <div className="App">
      <div className="todo_list">
        <h1 className="todo_h1">Todo Lists</h1>
        {ToDoItems.map(item => {
          return ( 
            <ToDo key={item} description={item.Description} day={item.Day} date={item.Date}/>
          )
          })
        }
      </div>
      </div> 
    </>
  );
}
export default App;