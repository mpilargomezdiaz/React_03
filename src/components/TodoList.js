import React, { useState } from 'react';

let nextPosition = 0;

export default function TodoList() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const Add = () => {
    setList([...list, { position: nextPosition++, name: task }]);
  }

  const Delete = () => {
    setList(
      list.filter(a => a.id !== list.id)
    );
  }

  const DeleteLast = () => {
    setList(task => task.slice(0, -1)
    );
  }
  return (
    <>
      <h1>To do list</h1>
      <input
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <div>
        <button onClick={Add}>Add Task</button>
        <button onClick={Delete}>Delete Task</button>
        <button onClick={DeleteLast}>Delete LastTask</button>
      </div>
      <h3>Task:</h3>
      {list.map(lista => (
        <p key={lista.position}>{lista.name}  <button onClick={() => {
          setList(
            list.filter(a =>
              a.position !== lista.position
            )
          );
        }}>
          Delete
        </button></p>
      ))}
    </>
  );
}
