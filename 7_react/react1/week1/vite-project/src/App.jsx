import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const ToDoListItem = (props) => {
  console.log(props);
  return (
    <div>
      Item {props.itemNumber} : {props.itemDescription}, {props.itemDay} ,
      {props.itemDate}
    </div>
  );
};

const ToDo = (props) => {
  return (
    <div>
      Todo item : {props.description} - {props.day} - {props.date}
    </div>
  );
};

const ToDoItems = [
  {
    Description: 'Get out of bed',
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
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="homework">
        <h2>
          <b>Homework Week1</b>
        </h2>
      </div>
      <div className="todo_list_normal_text">
        <h3>Todo List as normal text</h3>
        <p>* Get out of bed, Wed Sep 13 2017</p>
        <p>* Brush teeth, Thu Sep 14 2017</p>
        <p>* Eat breakfast, Fri Sep 15 2017</p>
      </div>

      <p>*****************************************************</p>

      <div className="todo_list_static">
        <h3>Todo List as static items using props</h3>

        <ToDoListItem
          itemNumber="1"
          itemDescription="Get out of bed"
          itemDay="Wed"
          itemDate="Sep 13 2017"
        />
        <ToDoListItem
          itemNumber="2"
          itemDescription="Brush teeth"
          itemDay="Thu"
          itemDate="Sep 14 2017"
        />
        <ToDoListItem
          itemNumber="3"
          itemDescription="Eat breakfast"
          itemDay="Fri"
          itemDate="Sep 15 2017"
        />
      </div>

      <p>*****************************************************</p>

       <div className="todo_item_from_array">
        <h3>Todo List taken from a todo lists array</h3>

        {ToDoItems.map(item => {
          return ( 
            <ToDo key={item} description={item.Description} day={item.Day} date={item.Date}/>
          )
          })
        }
      </div> 

    </>
  );
}

export default App;
