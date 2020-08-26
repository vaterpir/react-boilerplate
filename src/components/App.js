import React, { useState } from "react";
import { CreateTask } from "./CreateTask";

import "../styles/App.css";

let arr = []

export const App = () => {
  const [list, setList] = useState('');

  const addElem = (newElemArr) => {
    arr = [...arr, newElemArr];
    editList(arr);
  }
  const editElem = (index, value) => {
    arr[index] = value;
  }
  const deleteElem = (indexDel) => {
    arr.splice(indexDel, 1);
    editList(arr);
  }

  const Task = ({ i, content }) => {
    const [value, setValue] = useState(content);
    const [active, setActive] = useState(false);
    return (
      <div className="task">
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)} disabled={!active} />
        <button onClick={() => {
          if (active) editElem(i, value);
          setActive(!active);
        }}
        >
          {`${(!active) ? "Редакт." : "Принять"}`}
        </button>
        <button onClick={() => deleteElem(i)}>X</button>
      </div>
    )
  }

  const editList = (newarr) => {
    const newList = newarr.map((elem, index) => {
      return <Task i={index} content={elem} key={index} />
    });
    setList(newList);
  }

  return (
    <div className="App">
      <CreateTask arr={arr} edit={addElem} />
      <div className="taskList">{list}</div>
    </div>
  );
};
