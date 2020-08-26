import React, { useState } from "react";

export const CreateTask = ({ edit }) => {
  const [newData, setNewData] = useState(false);

  return (
    <div className="createTask">
      <input type="text" onChange={(event) => setNewData(event.target.value)} placeholder="Введите текст задачи ..." />
      <button onClick={() => {
        (newData) ? edit(newData) : ""
      }}
      >
        Добавить
      </button>
    </div >
  );
};
